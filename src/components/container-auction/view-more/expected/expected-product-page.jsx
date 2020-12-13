import React from 'react';
import './expected-page.scss';
import { Config } from '../../../../constants/config';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

const ExpectedProductPage = ({ data }) => {

    const intl = useIntl()

    return (
        <div>
            <div className="row">
                {data.map(products =>
                    <NavLink
                        className="mt-5 col-12 col-md-6 col-lg-4 col-xl-3"
                        to={'/product-page/' + products.id}
                        key={products.id}
                    >
                        <div className="expect-block card mx-3">
                            <div className="containerCard d-flex flex-column">
                                <img
                                    src={Config.ImageUrl +
                                        products.firstProductImage.data.cover + '_mediumOne.' +
                                        products.firstProductImage.data.ext
                                    }
                                    alt={products.firstProductImage.data.cover}
                                    className="w-100 productsImg"
                                />
                                <h4 className="text-center font-16 h-40 font-weight-bold Monsterrat_Medium">
                                    {products.title}
                                </h4>
                                <div className="p-3 expected_product">
                                    {products.id
                                        ? <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.product_info.lot_id_name}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {products.id}
                                            </span>
                                        </div>
                                        : null
                                    }
                                    {products.auction_type
                                        ? <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                  {intl.messages.lot.product_type}
                                            </span>
                                            <span
                                                className="font-12 text-dark Sans_Regular">
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
                                                {intl.messages.lot.buy_now_price}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.formatNumber(products.start_price)}
                                            </span>
                                        </div>
                                        : null
                                    }
                                    {/* {products.start_date
                                        ? <div className="d-flex justify-content-between mt-2">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.lot.start_date}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {products.start_date}
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
                                    } */}
                                </div>

                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default ExpectedProductPage