import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLastProducts_req } from '../../../../api/product/product.api';
import LastPage from './last-page';
import { PRODUCT_REDUCER } from '../../../../redux/itemReducer';

const LastViewMore = () => {
    const [last, setLast] = useState([])
    const dispatch = useDispatch()
    const item = useSelector(state => state.itemReducer)
    useEffect(() => {
        const lastProductsList = async () => {
            try {
                const lastProductsList = await getLastProducts_req();
                dispatch({ type: PRODUCT_REDUCER, payload: lastProductsList })
                if (lastProductsList && lastProductsList.data) {
                    setLast(lastProductsList);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        lastProductsList();
    }, []);
    return (
        <React.Fragment>
            <LastPage data={item} />
        </React.Fragment>
    )
}

export default LastViewMore
