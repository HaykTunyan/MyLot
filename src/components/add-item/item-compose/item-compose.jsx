import React, { useState, useEffect } from 'react';
import { addProduct_req, addModalProduct_req } from '../../../api/add-product/add.product.api';
import { getRegions_req, getCity_req } from '../../../api/product/product.api';
import UploadImages from './UploadImages';
import './item-compose.scss';
import { useParams, useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddProductItem = (props) => {
    const { id } = useParams();
    let history = useHistory();
    const intl = useIntl();
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [state, setState] = useState({
        title: "",
        description: "",
        start_price: "",
        min_bid_price: "",
        region_id: "",
        city_id: "",
        auction_type: "",
        product_type: "",
        buy_now_price: '',
        category: id,
        images: "",
        start_date: '',
        end_date: '',
        currency: ''
    })
    const [upRegions, setRegions] = useState([])
    const [startDate, setStartDate] = useState(new Date(Date.now() + (3600 * 1000 * 24)))
    const [endDate, setEndDate] = useState(new Date())
    const [parameter, setParameter] = useState(false)
    const [upCity, setCity] = useState([])
    const [model, setModel] = useState([])
    const [parentFilter, setParentFilter] = useState({})
    localStorage.setItem('category', id)

    useEffect(() => {
        const upRegionProducts = async () => {
            try {
                const regionProductsList = await getRegions_req();
                setRegions(regionProductsList);
            } catch (e) {
                console.log(e.response);
            }
        };
        upRegionProducts();
        const upCityProducts = async () => {
            try {
                const cityProductsList = await getCity_req();
                setCity(cityProductsList);
            } catch (e) {
                console.log(e.response);
            }
        };
        upCityProducts();
    }, []);

    const dateChange = date => {
        setStartDate({
            startDate: date
        })
    }
    useEffect(() => {
        setState({
            ...state,
            start_date: startDate.startDate,

        });
    }, [startDate])


    const endDateChange = date => {
        setEndDate({
            endDate: date
        })
    }
    useEffect(() => {
        setState({
            ...state,
            end_date: endDate.endDate,

        });
    }, [endDate])

    const handleChange = (event, item) => {

        const { target: { name, value } } = event
        console.log("event", name)
        setState({
            ...state,
            [name]: value
        });
        if (item) {
            addModalProduct_req(value).then(({ data }) => {
                const { filter_group_id } = item;
                setParentFilter({
                    ...parentFilter,
                    [filter_group_id]: data
                })
            })
        }
    }

    const addProduct = async () => {
        try {
            const addProductList = await addProduct_req(state);
            if (addProductList) {
                localStorage.removeItem('category')
                localStorage.setItem("state", state.currency)
                history.push(`/addItem/finish/${addProductList.data.id}`);
            }
            setSubmitted(!submitted)
            setParameter(true)

        } catch (e) {
            console.log('city product', e);
            setError(e.response);
        }
    };
    return (
        <React.Fragment>
            <UploadImages
                setImages={(imagesList) => {
                    setState({
                        ...state,
                        images: imagesList
                    })
                }}
            />
            {state.images === ''
                ? <span className='please-add-picture'>
                    {intl.messages.add_item.step_two_title}
                </span>
                : null
            }
            <div className='form-group'>
                <div className="d-flex flex-column">
                    {props?.filterGroup?.data ?
                        <div className="group-conatiner">
                            {props.filterGroup.data.map((item) => {
                                const {
                                    id,
                                    filterGroup: {
                                        data: {
                                            type,
                                            name,
                                            key,
                                            filters,
                                            parent_id
                                        }
                                    }
                                } = item
                                return (
                                    <div key={id} >
                                        {type === "select" ?
                                            <div className="form-group">
                                                <label
                                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                                >
                                                    {name}
                                                </label>
                                                <select
                                                    value={state[key]}
                                                    onChange={(event) => handleChange(event, item)}
                                                    name={key}
                                                    className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                                                >
                                                    <option selected >
                                                        {name}
                                                    </option>
                                                    {parentFilter[parent_id]
                                                        ? parentFilter[parent_id].map(({
                                                            id: itemId,
                                                            value: itemValue
                                                        }) => (
                                                                <option
                                                                    key={itemId}
                                                                    value={itemId}
                                                                    className="my-1 item-product"
                                                                >
                                                                    {itemValue}
                                                                </option>
                                                            ))
                                                        : filters?.data.map(({
                                                            id: itemId,
                                                            value: itemValue
                                                        }) => (
                                                                <option
                                                                    key={itemId}
                                                                    value={itemId}
                                                                    className="item-product"
                                                                >
                                                                    {itemValue}
                                                                </option>
                                                            ))
                                                    }
                                                </select>
                                                {error ? error.data.errors[key] : null}
                                            </div> :
                                            <div>
                                                {item && item.filterGroup && item.filterGroup
                                                    && item.filterGroup.data ?
                                                    <div className="form-group d-md-flex">
                                                        <label
                                                            className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                                        >
                                                            {item.filterGroup.data.name}
                                                        </label>
                                                        <div className="col-12 d-flex pl-0 pr-0 col-md-8 col-lg-3 mt-3 mt-md-0">
                                                            <input
                                                                type="text"
                                                                placeholder={item.filterGroup.data.name}
                                                                name={key}
                                                                value={state[key]}
                                                                onChange={handleChange}
                                                                className={'form-control ' + (submitted ? ' is-invalid' : '')}
                                                            />
                                                            {item
                                                                && item.filterGroup
                                                                && item.filterGroup.data
                                                                && item.filterGroup.data.unity &&
                                                                <select
                                                                    name={key + '_unity'}
                                                                    onChange={handleChange}
                                                                    value={state[key + '_unity']}
                                                                >
                                                                    <option className="">
                                                                        {intl.messages.add_item.step_two_title_type}
                                                                    </option>
                                                                    {item.filterGroup.data.unity.map(item =>
                                                                        <option className="">
                                                                            {item}
                                                                        </option>
                                                                    )}
                                                                </select>
                                                            }
                                                        </div>
                                                    </div> : null}
                                                {error ? error.data.errors[key] : null}
                                            </div>}
                                    </div>
                                )
                            }
                            )}
                        </div> : null}
                </div>
                {/* Region */}
                <div className="form-group">
                    <div className="group-conatiner">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_country_state}
                        </label>
                        <select
                            value={state.region_id}
                            onChange={handleChange}
                            name="region_id"
                            className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        >
                            <option>
                                {intl.messages.add_item.step_two_country_state}
                            </option>
                            {upRegions && upRegions.data && upRegions.data.map(item =>
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.id}.{item.name}
                                </option>
                            )}
                        </select>
                        {error ? error.data.errors.region_id : null}
                    </div>
                </div>
                {/* City */}
                <div className="form-group">
                    <div className="group-conatiner">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_city_name}
                        </label>
                        <select
                            value={state.city_id}
                            onChange={handleChange}
                            name="city_id"
                            required
                            className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        >
                            <option>
                                {intl.messages.add_item.step_two_city}
                            </option>
                            {upCity && upCity.data && upCity.data.map(item =>
                                <option
                                    key={item.id}
                                    value={item.id}
                                    className='item-product'
                                >
                                    {item.id}.{item.name}
                                </option>
                            )}
                        </select>
                        {error ? error.data.errors.city_id : null}
                    </div>
                </div>
                {/* Start Date */}
                <div className="form-group">
                    <div className="group-container d-block d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.lot.start_date}
                        </label>
                        <DatePicker
                            selected={startDate.startDate}
                            onChange={dateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className=" col-12 col-md-12 col-lg-4 mt-3 mt-md-0"
                        />
                        {error ? error.data.errors.start_date : null}
                    </div>
                </div>
                {/* End Date */}
                <div className="form-group">
                    <div className="group-conatiner d-block d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.lot.end_date}
                        </label>
                        <DatePicker
                            selected={endDate.endDate}
                            onChange={endDateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className=" col-12 col-md-12 col-lg-4 mt-3 mt-md-0"
                        />
                        {error ? error.data.errors.start_date : null}
                    </div>
                </div>
                {/* Currency Type */}
                <div className="form-group">
                    <div className="group-conatiner">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_currency}
                        </label>
                        <select
                            onChange={handleChange}
                            name="currency"
                            value={state.currency}
                            required
                            className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        >
                            <option >
                                {intl.messages.add_item.step_two_currency}
                            </option>
                            <option value="AMD">
                                AMD
                            </option>
                            <option value="RUB">
                                RUB
                            </option>
                        </select>
                    </div>
                </div>
                {/* Auction Type */}
                <div className="form-group">
                    <div className="group-conatiner">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_currency_type}
                        </label>
                        <select
                            onChange={handleChange}
                            name="auction_type"
                            value={state.auction_type}
                            required
                            className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        >
                            <option>
                                {intl.messages.add_item.step_two_currency_type}
                            </option>
                            <option value="standard">
                                {intl.messages.add_item.step_two_currency_standart}
                            </option>
                            <option value="holland">
                                {intl.messages.add_item.step_two_currency_holande}
                            </option>
                        </select>
                        {error ? error.data.errors.auction_type : null}
                    </div>
                </div>
                {/* <DatePicker /> */}

                {/* Start Price */}
                <div className="form-group">
                    <div className="group-conatiner d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_start_step}
                        </label>
                        <input
                            type="text"
                            name="start_price"
                            placeholder={intl.messages.add_item.step_two_start_step}
                            value={intl.formatNumber(state.start_price.replace(/\D/g, ""))}
                            required
                            onChange={handleChange}
                            className="form-control col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        />
                    </div>
                    {error ? error.data.errors.start_price : null}
                </div>
                {/* Buy Now */}
                <div className="form-group">
                    <div className="group-conatiner d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.bid_now}
                        </label>
                        <input
                            type="text"
                            name="buy_now_price"
                            placeholder={intl.messages.bid_now}
                            value={intl.formatNumber(state.buy_now_price.replace(/\D/g, ""))}
                            required
                            onChange={handleChange}
                            className="form-control col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        />
                    </div>
                    {error ? error.data.errors.buy_now_price : null}
                </div>
                {/* Min Bid Proce */}
                <div className="form-group">
                    <div className="group-conatiner d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_minimum_step}
                        </label>
                        <input
                            type="number"
                            name="min_bid_price"
                            placeholder={intl.messages.add_item.step_two_minimum_step}
                            value={state.min_bid_price}
                            required
                            onChange={handleChange}
                            className="form-control col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                        />
                    </div>
                    {error ? error.data.errors.min_bid_price : null}
                </div>
                {/* Title Product */}
                <div className="form-group">
                    <div className="group-conatiner d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.registration.name}
                        </label>
                        <input
                            type="text"
                            placeholder={intl.messages.registration.name}
                            name="title"
                            required
                            value={state.title}
                            onChange={handleChange}
                            className="form-control col-12 col-md-8 col-lg-9 mt-3 mt-md-0"
                        />
                        {error ? error.data.errors.title : null}
                    </div>
                </div>
                {/* Description Product */}
                <div className="form-group">
                    <div className="group-conatiner d-md-flex">
                        <label className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3">
                            {intl.messages.add_item.step_two_textarea}
                        </label>
                        <textarea
                            type="textarea"
                            name="description"
                            rows="5"
                            placeholder={intl.messages.add_item.step_two_textarea}
                            value={state.description}
                            onChange={handleChange}
                            required
                            className="form-control controler-doscription col-12 col-md-8 col-lg-9 mt-3 mt-md-0"
                        >
                        </textarea>
                    </div>
                    {error ? error.data.errors.description : null}
                </div>
                {/* Add Product */}
                <div className="d-flex justify-content-end mt-3">
                    {/* <ButtonComponent 
                        text = {'Գրանցել'}
                        _onClick={() => addProduct()}
                        className={`btn add-product-btn`}
                    /> */}
                    <button
                        onClick={addProduct}
                        type="submit"
                        className="btn add-product-btn"
                    >
                        <span>
                            {intl.messages.add_item.step_two_btn}
                        </span>
                    </button>
                </div>
                {error ? console.log("error", error.data.errors) : null}
                {/* {error ? error.data.errors.map(item=>item) : null} */}
            </div>
        </React.Fragment>
    )
}

export default AddProductItem