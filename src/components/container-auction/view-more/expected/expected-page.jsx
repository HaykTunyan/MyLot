import React, { useState } from 'react';
import './expected-page.scss';
import { NavLink } from "react-router-dom";
import ExpectedProductPage from './expected-product-page';
import ExpectedPagination from './expected-pagination/expected-pagination';
import { useIntl } from 'react-intl';

const ExpectedPage = ({ data }) => {
    const intl = useIntl();
    
    if (!data.data) {
        return <React.Fragment />
    }
    const page = data.meta.pagination

    return (
        <React.Fragment>
            <div className="container my-5">
                <nav class="nav py-4">
                    <NavLink to="/home" className="text-dark mr-2">
                        {intl.messages.main_page}
                    </NavLink>
                    <span>&gt;</span>
                    <NavLink to="/expected" className="active ml-2">
                        {intl.messages.Upcoming_auctions}
                    </NavLink>
                </nav>
                <div className="p-3 card">
                    <h3 className="text-center">{intl.messages.Upcoming_auctions}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="itemsFound clearfix">
                            <p className="foundItems">
                                <span className="">{intl.messages.Lot_lenght}</span>
                                <span className="ml-2">{page.total}</span> 
                            </p>
                        </div>
                        <div className="page">
                            <ExpectedPagination page={page} />
                        </div>
                    </div>
                    <ExpectedProductPage data={data.data} />
                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <div className="itemsFound clearfix">
                            <p className="foundItems">
                                <span className="">{intl.messages.Lot_lenght}</span>
                                <span className="ml-2">{page.total}</span> 
                            </p>
                        </div>
                        <div className="page">
                            <ExpectedPagination page={page} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExpectedPage