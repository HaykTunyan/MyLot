import React, { useState, useEffect, useCallback } from 'react';
import './edit-item.scss';
import "../add-item/item-compose/item-compose.scss";
import { useParams, NavLink, Redirect, useHistory } from 'react-router-dom';
import { addProduct_req, addModalProduct_req } from '../../api/add-product/add.product.api';
import UploadImages from '../add-item/item-compose/UploadImages';
import { getCity_req, getRegions_req, getProducts_req } from '../../api/product/product.api';
import { updateProduct_req } from '../../api/update-product/update.product.api';
import { Config } from '../../constants/config';
import DatePicker from 'react-datepicker';
import { useIntl } from 'react-intl'
import 'react-datepicker/dist/react-datepicker.css';
import { picutureUrlMapper } from '../../utils/imageData.util';
import UploadImage from './edit-images';
import ButtonComponent from '../../app-components/button/button.components';
import Upload from '../../assets/images/UserProduct/upload.png';

const EditItem = (props, { data }) => {
    const { id: productId } = useParams();
    let history = useHistory();
    const intl = useIntl()
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [product, setProduct] = useState([])
    const [state, setState] = useState({
        title: "",
        description: "",
        start_price: "",
        min_bid_price: "",
        region_id: "",
        city_id: "",
        auction_type: "",
        product_type: "",
        currency: '',
        images: "",
        start_date: '',
        end_date: '',
    })
    const [upRegions, setRegions] = useState([])
    const [parameter, setParameter] = useState(false)
    const [upCity, setCity] = useState([])
    const [model, setModel] = useState([])
    const [parentFilter, setParentFilter] = useState({})
    const upCityProducts = async () => {
        try {
            const cityProductsList = await getCity_req();
            setCity(cityProductsList);
        } catch (e) {
            console.log('city product', e.response);
        }
    };
    const upRegionProducts = async () => {
        try {
            const regionProductsList = await getRegions_req();
            setRegions(regionProductsList);
        } catch (e) {
            console.log('region product', e.response);
        }
    };
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

    const getProduct = async () => {
        try {
            const productRes = await getProducts_req(productId);
            const {
                product: {
                    data: {
                        filters: {
                            data: filters,
                        },
                        description,
                        city: {
                            data: {
                                id: city_id,
                                region_id,
                            }
                        },
                        title,
                        start_price,
                        min_bid_price,
                        auction_type,
                        currency,
                        category: {
                            data: {
                                id: category,
                            }
                        },
                        media: {
                            data: media,
                        }
                    }
                }
            } = productRes
            const defaultState = {
                ...state,
                description,
                city_id,
                region_id,
                title,
                start_price,
                min_bid_price,
                auction_type,
                currency,
                category,
                images: media.map(picutureUrlMapper)
            }
            const tempState = filters.reduce((st, { id, filterGroups: { data: { key } } }) => {
                st[key] = id;
                return st;
            }, defaultState)
            setState(tempState)
            setProduct(productRes)
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getProduct();
        upRegionProducts();
        upCityProducts();
    }, []);

    const handleChange = (event, item) => {
        const { target: { name, value } } = event
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
            const addProductList = await updateProduct_req(productId, state);
            setParameter(true)
        } catch (e) {
            console.error(e)
            setError(e.response);
        }
    };

    return (
        <React.Fragment>
            <div className="container py-5">
                <div className="card p-4">
                    {/* Edit Images */}
                    <UploadImage
                        data={state.images}
                        getState={images => setState({
                            ...state,
                            images,
                        })}
                        uploadTitle='Ներբեռնեք լուսանկար'
                        uploadImage={Upload}
                        withIcon={false}
                        withLabel={false}
                        className=" col-12 col-sm-4 col-md-3 col-xl-2 flex-column upload-btn text-upload"
                    >
                        {(images) => (
                            <div className="upload__image-wrapper">
                                {console.log("producgt", product.product)}
                                <div className="d-flex flex-wrap">
                                    {images?.map(({ cover }) => (
                                        <div >
                                            <img
                                                key={cover}
                                                src={cover}
                                                alt=" "
                                                className="imageItem  mx-1 "

                                            />

                                            {console.log('cover image', cover)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </UploadImage>
                    {/* Edit Images  */}
                    <div className="form-group">
                        <div className="d-flex flex-column">
                            {product?.product?.data?.filters?.data ?
                                <div className="group-conatiner">
                                    {product.product.data.filters.data.map((item) => {
                                        const {
                                            id,
                                            filterGroups: {
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
                                                                ընտրեք {name}
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
                                                                            <option>ընտրեք</option>
                                                                            {item.filterGroup.data.unity.map(item =>
                                                                                <option>{item}</option>
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
                                    className=" col-12 col-md-8 col-lg-4 mt-3 mt-md-0"
                                />
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
                                    className=" col-12 col-md-8 col-lg-4 mt-3 mt-md-0"
                                />
                            </div>
                        </div>
                        {/* Region */}
                        <div className="form-group">
                            <div className="group-conatiner">
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Մարզ
                                </label>
                                <select
                                    value={state.region_id}
                                    onChange={handleChange}
                                    name="region_id"
                                    className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                                >
                                    <option>
                                        ընտրեք մարզը
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
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Քաղաքի անվանումը
                                </label>
                                <select
                                    value={state.city_id}
                                    onChange={handleChange}
                                    name="city_id"
                                    required
                                    className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                                >
                                    <option>
                                        ընտրեք քաղաքը
                                    </option>
                                    {upCity && upCity.data && upCity.data.map(item =>
                                        <option
                                            key={item.id}
                                            value={item.id}
                                            className="item-product"

                                        >
                                            {item.id}.{item.name}
                                        </option>
                                    )}
                                </select>
                                {error ? error.data.errors.city_id : null}
                            </div>
                        </div>
                        {/* Auction Type */}
                        <div className="form-group">
                            <div className="group-conatiner">
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Աճուրդի տեսակը
                                </label>
                                <select
                                    onChange={handleChange}
                                    name="auction_type"
                                    value={state.auction_type}
                                    required
                                    className="composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                                >
                                    <option >
                                        ընտրեք աճուրդի տեսակը
                                    </option>
                                    <option value="standard">
                                        ստանդարտ
                                    </option>
                                    <option value="holland">
                                        հալանդական
                                    </option>
                                </select>
                                {error ? error.data.errors.auction_type : null}
                            </div>

                        </div>
                        <div className="form-group">
                            <div className="group-conatiner">
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Արժույթը
                                </label>
                                <select
                                    onChange={handleChange}
                                    name="currency"
                                    value={state.currency}
                                    required
                                    className={`composer-selecter col-12 col-md-8 col-lg-3 mt-3 mt-md-0`}
                                >
                                    <option >
                                        Արժույթը
                                    </option>
                                    <option value="AMD">
                                        AMD
                                    </option>
                                    <option value="RUB">
                                        RUB
                                    </option>
                                </select>
                                {error ? error.data.errors.auction_type : null}
                            </div>

                        </div>
                        {/* Start Price */}
                        <div className="form-group">
                            <div className="group-conatiner d-md-flex">
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Մեկնարկային գինը
                                </label>
                                <input
                                    type="text"
                                    name="start_price"
                                    placeholder="Մեկնարկային գինը դրամով"
                                    value={state.start_price}
                                    required
                                    onChange={handleChange}
                                    className="form-control col-12 col-md-8 col-lg-3 mt-3 mt-md-0"
                                />
                            </div>
                            {error ? error.data.errors.start_price : null}
                        </div>
                        {/* Min Bid Proce */}
                        <div className="form-group">
                            <div className="group-conatiner d-md-flex">
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Նվազագույն քայլ
                                </label>
                                <input
                                    type="text"
                                    name="min_bid_price"
                                    placeholder="Նվազագույն քայլ դրամով"
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
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Անուն
                                </label>
                                <input
                                    type="text"
                                    placeholder="Անուն"
                                    name="title"
                                    required
                                    value={state.title}
                                    defaultValue={product && product.product
                                        ? product.product.data.title
                                        : null
                                    }
                                    onChange={handleChange}
                                    className="form-control col-12 col-md-8 col-lg-9 mt-3 mt-md-0"
                                />
                                {error ? error.data.errors.title : null}
                            </div>
                        </div>
                        {/* Description Product */}
                        <div className="form-group">
                            <div className="group-conatiner d-md-flex">
                                <label
                                    className="Sans_SemiBold font-16 font-weight-bold col-12 col-md-4 col-lg-3"
                                >
                                    Նկարագրություն
                                </label>
                                <textarea
                                    type="textarea"
                                    name="description"
                                    placeholder="Նկարագրություն"
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
                            <ButtonComponent
                                _onClick={() => addProduct()}
                                text={'Գրանցել'}
                                className="add-product-btn"
                            />
                        </div>
                        {error ? console.log("error", error.data.errors) : null}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditItem