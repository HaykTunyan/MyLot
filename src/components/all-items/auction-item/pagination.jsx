import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_REDUCER } from '../../../redux/itemReducer';

const Pagination = ({ page }) => {
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
            const res = await axios.get(previous);
            dispatch({ type: PRODUCT_REDUCER, payload: res.data })
        }
        else if (current_page < number) {
            const res = await axios.get(next);
            dispatch({ type: PRODUCT_REDUCER, payload: res.data })

        }
    }
    return (
        <nav>
            <ul className="pagination my-1">
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

export default Pagination