import React from 'react';
import '../container-auction.scss';
import './live-auction.scss';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { NavLink } from "react-router-dom";
import { picutureUrlMapper } from '../../../utils/imageData.util';
import { useIntl } from 'react-intl';
import NextRight from '../../../assets/images/icon/right-arrow.svg';

const LastChanseAuction = ({ data }) => {
    const intl = useIntl()
    if (!data.data) {
        return <React.Fragment />
    }

    return (
        <>
            <div className="card mb-5">
                <div className="col-12">
                    <h3 className="text-center header_blues mt-3 Monsterrat_Medium">
                        {intl.messages.Upcoming_auctions}
                    </h3>
                    <Carousel
                        addArrowClickHandler
                        autoPlay={3000}
                        animationSpeed={1500}
                        centered
                        itemWidth={240}
                        slidesPerPage={1}
                        arrows
                        infinite
                    >
                        {data.data.map(item =>
                            <NavLink className="last_container" to={'/product-page/:' + item.id} key={item.id}>
                                <div className="d-flex flex-column mx-3">
                                    <div className="d-flex flex-column">
                                        <img
                                            src={picutureUrlMapper(item.firstProductImage.data)}
                                            className="w-100 product_img"
                                            alt={item.firstProductImage.data.cover}
                                        />
                                        <h4 className="Monsterrat_Medium h-40">
                                            {item.title}
                                        </h4>
                                        <div className="p-3 expected_product">
                                            <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    Status Product
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {item.status_of_product}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    Auction Type
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {item.auction_type}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    Start Price
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.formatNumber(item.start_price)}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    Buy Now
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.formatNumber(item.buy_now_price)}
                                                </span>
                                            </div>
                                            {item.highest_suggestion ?
                                                <div className="d-flex justify-content-between mt-1">
                                                    <span className="font-12 text-dark Sans_Regular">
                                                        Highest Bid
                                                    </span>
                                                    <span className="font-12 text-dark font-weight-bold Sans_Bold">
                                                        {intl.formatNumber(item.highest_suggestion)}
                                                    </span>
                                                </div> : null}
                                            <div className="d-flex justify-content-between mt-1">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    End Date
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {item.end_date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )}
                    </Carousel>
                    <div className="d-flex justify-content-end py-2">
                        <NavLink to="/lastView">
                            <span className="header_blue Sans_Regular">
                                {intl.messages.View_More}
                                <img src={ NextRight } alt="RIGHT-ARROW" className="ml-1" />
                                <img src={ NextRight } alt="RIGHT-ARROW" className="" />  
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastChanseAuction