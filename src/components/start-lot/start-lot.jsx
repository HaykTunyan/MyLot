import React, { useEffect } from 'react';
import './start-lot.scss';
import AboutTop from '../../assets/images/AboutUs/About_top.png';
import AboutUnder from '../../assets/images/AboutUs/About_under.png';
import StartLeft from '../../assets/images/background/Path-left/Path-70.png';
import StartRight from '../../assets/images/background/Path-right/Path-97.png';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import NextRight from '../../assets/images/icon/right-arrow.svg';


window.scrollTo(0, 0);

const StartLot = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    // window.scrollTo(0, 0)
    const intl = useIntl();

    return (
        <div className="start-lot">
            <div className="start-container">
                <img
                    src={AboutTop}
                    alt="ABOUT_TOP"
                    className="about-top-img about-img d-none d-lg-block"
                />
                <div className="container-fluid about-info">
                    <h3 className="text-center lot-color  Monsterrat_Medium font-24 font-weight-bold my-5">
                        New online Lot platform for you
                    </h3>
                    <div className="row">
                        <div className="d-none d-md-block col-md-2 pl-0">
                            <img
                                src={StartLeft}
                                alt="PATH-70"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row">
                                <div className="col-12 col-md-6 my-5">
                                    <Link to="/home">
                                        <div className="card card-body card-start">
                                            <div className="d-flex flex-column text-center">
                                                <h3 className="">
                                                    Standard Auction
                                                </h3>
                                                <p className="header_blue">
                                                    Open your auction or make a bid
                                                </p>
                                            </div>
                                            <div className="d-flex card-link">
                                                <Link to="/home">
                                                    <span className="header_blue">
                                                        Get started
                                                        <img src={NextRight} alt="RIGHT-ARROW" className="ml-1" />
                                                        <img src={NextRight} alt="RIGHT-ARROW" className="" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 my-5">
                                    <Link to="/home">
                                        <div className="card card-body card-start">
                                            <div className="d-flex flex-column text-center">
                                                <h3 className="">
                                                    Hollandian Auction
                                                </h3>
                                                <p className="header_blue">
                                                    Open your lot or make a bid
                                                </p>
                                            </div>
                                            <div className="d-flex card-link">
                                                <Link to="/home">
                                                    <span className="header_blue">
                                                        Get started
                                                        <img src={NextRight} alt="RIGHT-ARROW" className="ml-1" />
                                                        <img src={NextRight} alt="RIGHT-ARROW" className="" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 my-4">
                                    <Link to="/about_us">
                                        <div className="card card-body card-start">
                                            <div className="d-flex flex-column text-center">
                                                <h3 className="">
                                                    About Us
                                                </h3>
                                                <p className="header_blue">
                                                    What is MyLot ?
                                                </p>
                                            </div>
                                            <div className="d-flex card-link">
                                                <Link to="/about_us">
                                                    <span className="header_blue">
                                                        Get started
                                                        <img src={ NextRight } alt="RIGHT-ARROW" className="ml-1" />
                                                        <img src={ NextRight } alt="RIGHT-ARROW" className="" /> 
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 my-4">
                                    <Link to="/">
                                        <div className="card card-body card-start">
                                            <div className="d-flex flex-column text-center">
                                                <h3 className="coming-title">
                                                    Comming Soon
                                                </h3>
                                                <p className="coming-title ">
                                                    new delivery lot products systems
                                                </p>
                                            </div>
                                            <div className="d-flex card-link">
                                                <Link to="/">
                                                    <span className="header_blue">
                                                        Get started
                                                        <img src={ NextRight } alt="RIGHT-ARROW" className="ml-1" />
                                                        <img src={ NextRight } alt="RIGHT-ARROW" className="" /> 
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-2 pr-0">
                            <img
                                src={StartRight}
                                alt="PATH-97"
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <img
                        src={AboutUnder}
                        alt="ABOUT_UNDER"
                        className="about-bottom-img about-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default StartLot;