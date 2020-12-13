import React, { useState, useEffect } from 'react';
import ExpectedPage from './expected-page';
import { getUpcomingProducts_req } from '../../../../api/product/product.api';
import { PRODUCT_REDUCER } from '../../../../redux/itemReducer';
import { useDispatch, useSelector } from 'react-redux';

const ExpectedViewMore = () => {
    const [upComing, setUpComing] = useState([])
    const dispatch = useDispatch()
    const item = useSelector(state => state.itemReducer)
    useEffect(() => {
        const upComingProductsList = async () => {
            try {
                const expectedProductsList = await getUpcomingProducts_req();
                dispatch({ type: PRODUCT_REDUCER, payload: expectedProductsList })
                if (expectedProductsList && expectedProductsList.data) {
                    setUpComing(expectedProductsList);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        upComingProductsList();
    }, []);
    return (
        <React.Fragment>
            <ExpectedPage data={item} />
        </React.Fragment>
    )
}
export default ExpectedViewMore
