import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLiveProductsGet_req } from '../../../../api/product/product.api';
import LivePage from './live-page';
import { PRODUCT_REDUCER } from '../../../../redux/itemReducer';

const LiveViewMore = () => {
    const [live, setLive] = useState([])
    const dispatch = useDispatch()
    const item = useSelector(state => state.itemReducer)
    useEffect(() => {
        const liveProductsList = async () => {
            try {
                const liveProductsList = await getLiveProductsGet_req();
                dispatch({ type: PRODUCT_REDUCER, payload: liveProductsList })
                if (liveProductsList && liveProductsList.data) {
                    setLive(liveProductsList);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        liveProductsList();
    }, []);
    return (
        <React.Fragment>
            <LivePage data={item} />
        </React.Fragment>
    )
}

export default LiveViewMore
