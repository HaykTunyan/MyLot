import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { PRODUCT_REDUCER } from '../../../../../redux/itemReducer';

const LastPaginate = ({ page }) => {

    const dispatch = useDispatch()
    const {
        total_pages,
        current_page,
        links: {
            next,
            previous
        }
    } = page

    const pageNumbers = []
    for (let i = 1; i <= total_pages; i++) {
        pageNumbers.push(i)
    }
    const handleClick = async (number) => {
        if (current_page > number) {
            const previousReq = "&type=paginate"
            const res = await axios.get(previous + previousReq);
            dispatch({ type: PRODUCT_REDUCER, payload: res.data })
        }
        else if (current_page < number) {
            const nextReq = "&type=paginate"
            const res = await axios.get(next + nextReq);
            dispatch({ type: PRODUCT_REDUCER, payload: res.data })
        }
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => handleClick(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default LastPaginate