import React from 'react';
import './last-view-more.scss';
import { NavLink } from "react-router-dom";
import { Config } from '../../../../constants/config'
import { useIntl } from 'react-intl'
import LastPaginate from './last-pagination/last-pagination';

const LastPage = ({ data }) => {
    const intl = useIntl()
    if (!data.data) {
        return null
    }

    const page = data.meta.pagination
    return (
        <div className="container">
            <div className="p-3 card">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="itemsFound clearfix">
                        <p className="foundItems">
                            <span className="">{intl.messages.Lot_lenght}</span>
                            <span className="ml-2">{page.total}</span>
                        </p>
                    </div>
                    <div className="page">
                        <LastPaginate page={page} />
                    </div>
                </div>
                <div className="row">
                    {data.data.map(products =>
                        <NavLink
                            className="col-12 col-md-6 col-lg-4 col-xl-4 mt-5"
                            to={'/product-page/' + products.id}
                            key={products.id}
                        >
                            <div className="card mx-3">
                                <div className="d-flex flex-column">
                                    <img
                                        src={
                                            Config.ImageUrl +
                                            products.firstProductImage.data.cover + '_mediumOne.' +
                                            products.firstProductImage.data.ext
                                        }
                                        alt={products.firstProductImage.data.cover}
                                        className="w-100 border-bottom"
                                    />
                                    <h4 className="text-center mt-2 font-16 font-weight-bold">
                                        {products.title}
                                    </h4>
                                    <div className="p-3">
                                        {products.id
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.product_info.lot_id_name}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">{products.id}</span>
                                            </div>
                                            : null
                                        }
                                        {products.auction_type
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.product_type}
                                                </span>
                                                <span
                                                    className="font-12 text-dark Sans_Regular"
                                                >
                                                    {products.auction_type === 'standard'
                                                        ? 'Ստանդարտ'
                                                        : 'Հոլլանդական'
                                                    }
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {products.buy_now_price
                                            ? <div className="d-flex justify-content-between mt-1">
                                                <span className="font-14 text-dark Sans_Regular">
                                                    {intl.messages.lot.buy_now_price}
                                                </span>
                                                <span className="font-14 text-dark font-weight-bold Sans_Regular">
                                                    {intl.formatNumber(products.buy_now_price)}
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {products.start_price
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.step_two_start_step}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.formatNumber(products.start_price)}
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {products.buy_now_price
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.buy_now_price}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.formatNumber(products.buy_now_price)}
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {products.highest_suggestion
                                            ? <div className="d-flex justify-content-between mt-1">
                                                <span className="font-14 text-dark Sans_Regular">
                                                    {intl.messages.lot.highest_suggestion}
                                                </span>
                                                <span className="font-14 text-dark font-weight-bold Sans_Bold">
                                                    {intl.formatNumber(products.highest_suggestion)}
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {products.end_date
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.end_date}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {products.end_date}
                                                </span>
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="itemsFound clearfix">
                        <p className="foundItems">
                            <span className="">{intl.messages.Lot_lenght}</span>
                            <span className="ml-2">{page.total}</span> 
                        </p>
                    </div>
                    <div className="page">
                        <LastPaginate page={page} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastPage