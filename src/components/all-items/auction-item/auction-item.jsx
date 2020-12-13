import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../all-items.scss';
import Pagination from './pagination';
import CategoryProduct from './category-product';
import { useIntl } from 'react-intl';

const AuctionItem = (props, category) => {

    const intl = useIntl();

    if (!props.data) {
        return null;
    }

    const dataName = props.props.category
    const data = props.data.data
    const page = props.data.meta

    return (
        <div className="container-fluid AuctionItem clearfix card">
            <div className="p-3">
                <h3 className="text-center"> {dataName.data.name} </h3>
                <div className="d-flex justify-content-between">
                    <h5 className="foundItems">
                        {intl.messages.Lot_lenght}
                        <span className="ml-2">{page.pagination.total}</span>
                    </h5>
                    <div className="page">
                        <Pagination
                            setData={props.setData}
                            page={page.pagination}
                        />
                    </div>
                </div>
                <CategoryProduct data={data} />
                <div className="d-flex justify-content-between mt-5">
                    <h5 className="foundItems">
                        {intl.messages.Lot_lenght}
                        <span className="ml-2">{page.pagination.total}</span>
                    </h5>
                    <div className="page">
                        <Pagination
                            setData={props.setData}
                            page={page.pagination}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctionItem