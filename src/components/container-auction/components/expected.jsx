import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import '../container-auction.scss';
import './live-auction.scss';
import { Config } from '../../../constants/config';
import { useIntl } from 'react-intl';
import NextRight from '../../../assets/images/icon/right-arrow.svg';

const Expected = ({ data }) => {
    const intl = useIntl();
    if (!data || !data.data || data.data.length === 0) {
        return null
    }


    return (
        <div className="card mb-5 expected_auction live_auction">
            <div className="col-12">
                <h3 className="text-center header_blues mt-3 Monsterrat_Medium live_auction_text">
                    {intl.messages.Upcoming_auctions}
                </h3>
                <Carousel
                    addArrowClickHandler
                    autoPlay={3000}
                    animationSpeed={1500}
                    centered
                    itemWidth={240}
                    margin={10}
                    slidesPerPage={1}
                    arrows
                    infinite
                >
                    {data.data.map(item =>
                        <NavLink className="expected_container" to={`/product-page/${item.id}`} key={item.id}>
                            <div className="expect-block card mx-3">
                                <div className="d-flex flex-column">
                                    <img
                                        src={Config.ImageUrl + item.firstProductImage.data.cover + '_mediumOne.' + item.firstProductImage.data.ext}
                                        className="product_img"
                                        alt={item.firstProductImage.data.cover}
                                    />
                                    <h4 className="Monsterrat_Medium h-40 px-3">
                                        {item.title}
                                    </h4>
                                    <div className="px-3 py-3 expected_product">
                                        <div className="d-flex justify-content-between mt-1">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.product_info.lot_id_name}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {item.id}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-1">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.add_item.step_two_currency_type}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {item.auction_type === 'standard'
                                                    ? ' Ստանդարտ '
                                                    : 'Հոլլանդական'
                                                }
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-1">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.add_item.step_two_start_step}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.formatNumber(item.start_price)}
                                            </span>
                                        </div>
                                        {item.buy_now_price
                                            ? <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.buy_now_price}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.formatNumber(item.buy_now_price)}
                                                </span>
                                            </div>
                                            : null
                                        }
                                        {item.highest_suggestion 
                                            ?  <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.product_info.this_step}
                                                </span>
                                                <span className="font-12 text-dark font-weight-bold Sans_Bold">
                                                    {intl.formatNumber(item.highest_suggestion)}
                                                </span>
                                                </div> 
                                            : null
                                        }
                                        {/* <div className="d-flex justify-content-between mt-1">
                                            <span className="font-12 text-dark Sans_Regular">
                                                {intl.messages.product_info.end_date_text}
                                            </span>
                                            <span className="font-12 text-dark Sans_Regular">
                                                {item.end_date}
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </Carousel>
                <div className="d-flex justify-content-end py-2">
                    <NavLink to={{ pathname: '/expected', state: { props: { data } } }} >
                        <span className="header_blue Sans_Regular">
                            {intl.messages.View_More}
                            <img src={ NextRight } alt="RIGHT-ARROW" className="ml-1" />
                            <img src={ NextRight } alt="RIGHT-ARROW" className="" />
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Expected