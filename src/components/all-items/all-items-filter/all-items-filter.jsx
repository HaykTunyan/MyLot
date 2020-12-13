import React, { useState, useEffect } from 'react';
import '../all-items.scss';
import { useParams, useHistory } from 'react-router-dom';
import { categoryFilterProduct_req } from '../../../api/category-filter/category-filter';
import { SET_FILTER_PRODUCT } from '../../../redux/itemReducer';
import { useDispatch } from 'react-redux';
import { addModalProduct_req } from '../../../api/add-product/add.product.api';

const AllItemsFilter = (data) => {
    
    const props = data.props.filterGroups
    const { id } = useParams();
    const dispatch = useDispatch()
    let history = useHistory();
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [state, setState] = useState({})
    const [parentFilter, setParentFilter] = useState({})
    const [filter, setFilters] = useState({})

    useEffect(() => {

        const slug = data.state
        const categoryFilter = async () => {
            try {
                const filterCategoryProduct = await categoryFilterProduct_req(slug, state)
                dispatch({ type: SET_FILTER_PRODUCT, payload: filterCategoryProduct })
            } catch (e) {
                console.log('e', e.response)
            }
        }
        categoryFilter()

    }, [Object.keys(state).length])

    useEffect(() => {
        const filterReq = async () => {
            try {
                const filterCategoryProduct = await categoryFilterProduct_req(data.state, state)
                dispatch({ type: SET_FILTER_PRODUCT, payload: filterCategoryProduct })
            } catch (e) {
                console.log('e', e.response)
            }
        }
        filterReq()
    }, [state["car-brand"]])

    const handleChange = (event, item) => {
        const { target: { name, value } } = event
        setState({
            ...state,
            [name]: value,
        });
    }

    return (
      <div className="form-group">
        <div className="d-flex justify-content-center">
          {props && props.data ? (
            <div className="group-filter">
              {props.data.map((item) => {
                const { name, key, filters, parent_id } = item;
                return (
                  <div key={id}>
                    <div className="form-group">
                      <select
                        value={state[key]}
                        onChange={(event) => handleChange(event, item)}
                        name={key}
                        className="filter-selecter"
                      >
                        <option selected>{name}</option>
                        {parentFilter[parent_id]
                          ? parentFilter[parent_id].map(
                              ({ id: itemId, value: itemValue }) => (
                                <option
                                  key={itemId}
                                  value={itemId}
                                  className="my-1 item-product"
                                >
                                  {itemValue}
                                </option>
                              )
                            )
                          : filters?.data.map(
                              ({ id: itemId, value: itemValue }) => (
                                <option
                                  key={itemId}
                                  value={itemId}
                                  className="item-product"
                                >
                                  {itemValue}
                                </option>
                              )
                            )}
                      </select>
                      {error ? error.data.errors[key] : null}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
}

export default AllItemsFilter