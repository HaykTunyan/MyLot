import React from 'react';
import { Config } from '../../../constants/config';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

const CategoryProduct = ({ data }) => {
    const res = useSelector(state => state.itemReducer)
    const intl = useIntl()

    return (
        <div className="itemsFound clearfix">
            {res.data ?
                <div className="row">
                    {res.data.products.data.map(products =>
                        <NavLink
                            className="col-12 offset-sm-4 col-sm-6 offset-md-0 col-md-6 col-xl-3 mt-5"
                            to={'/product-page/' + products.id}
                            key={products.id}
                        >
                            <div className="card expect-block  mx-3">
                                <div className="d-flex flex-column">
                                    <img
                                        src={Config.ImageUrl +
                                            products.firstProductImage.data.cover + '_mediumOne.' +
                                            products.firstProductImage.data.ext
                                        }
                                        className="product_img border-bottom"
                                        alt={products.firstProductImage.data.cover}
                                    />
                                    <h4 className="Monsterrat_Medium"> {products.title} </h4>
                                    <div className="p-3  expected_product">
                                        {products.auction_type
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.product_type}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {products.auction_type === 'standard'
                                                        ? 'Ստանդարտ'
                                                        : 'Հոլլանդական'
                                                    }
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {products.start_price
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.start_price}
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
                                        {products.end_data
                                            ? <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.product_info.end_date_text}
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
                : <div className="row">
                    {data.map(products =>
                        <NavLink
                            className="col-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-xl-3 mt-5"
                            to={'/product-page/' + products.id}
                            key={products.id}
                        >
                            <div className="card expect-block  mx-3">
                                <div className="d-flex flex-column">
                                    {products?.firstProductImage?.data
                                        ? <img
                                            src={Config.ImageUrl +
                                                products.firstProductImage.data.cover + '_smallOne.' +
                                                products.firstProductImage.data.ext
                                            }
                                            className="product_img border-bottom"
                                            alt={products.firstProductImage.data.cover}
                                        />
                                        : null
                                    }
                                    <h4 className="Monsterrat_Medium H-40"> {products.title} </h4>
                                    <div className="p-3 expected_product">
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.lot.product_type}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {products.auction_type === 'standard'
                                                    ? 'Ստանդարտ'
                                                    : 'Հոլլանդական'
                                                }
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                Մեկնարկային Գին
                                        </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.formatNumber(products.start_price)}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                Գնիր հիմա
                                        </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.formatNumber(products.buy_now_price)}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                Ավարտը
                                        </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {products.end_date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}</div>}
        </div>
    )
}

export default CategoryProduct 