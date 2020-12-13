import React from 'react';
import './footer.scss';
import PaymentCard from './components/payment-card';
import facebook from '../../assets/images/Footer/facebook.svg';
import instagram from '../../assets/images/Footer/instagram.svg';
import google from '../../assets/images/Footer/google@2x.png';
import location from '../../assets/images/Footer/pin_white.svg';
import mail from '../../assets/images/Footer/mail_white.svg';
import phone from '../../assets/images/Footer/call_white.svg';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

const Footer = () => {
    const intl = useIntl()
    return (
        <div className="footer">
            <div className="container pt-md-5">
                <div className="leftBlock">
                    <h1 className="Block_title"> MyLot </h1>
                    <p className="leftBlock_text">
                        {intl.messages.footer.footer_text}
                    </p>
                    <div className="centerBlock_1">
                        <ul className="centerBlock_menu_1">
                            <li><NavLink to="/home">{intl.messages.main_page}</NavLink></li>
                            <li><NavLink to="/about_us">{intl.messages.about_us}</NavLink></li>
                            <li><NavLink to="/contact_us">{intl.messages.contact_us}</NavLink></li>
                            <li><NavLink to="/politics">{intl.messages.privacy_policy}</NavLink></li>
                            <li><NavLink to="/help_center">{intl.messages.term_of_use}</NavLink></li>
                        </ul>
                    </div>
                    <ul className="leftBlock_contact">
                        <li className="mx-2">
                            <a
                                href="https://www.facebook.com/Mylot_-108037730954035/"
                                target="_blank"
                            >
                                <img src={facebook} alt="FACEBOOK" />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a
                                className="font-16"
                                href="mailto:info@mylot.am"
                            >
                                <img src={google} alt="GOOGLE" className="blockGoogle_img" />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a
                                href="https://www.instagram.com/mylot2020/?hl=ru&fbclid=IwAR0_ahPL7Ku-Q_KRt1kW_paKbP6tDGhVH0yFr8oh2ZdzgXwfgTc5iZojCHI"
                                target="_blank"
                            >
                                <img src={instagram} alt="INSTAGRAM" />
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="centerBlock">
                    <ul className="centerBlock_menu">
                        <li><NavLink to="/home">{intl.messages.main_page}</NavLink></li>
                        <li><NavLink to="/about_us">{intl.messages.about_us}</NavLink></li>
                        <li><NavLink to="/contact_us">{intl.messages.contact_us}</NavLink></li>
                        <li><NavLink to="/politics">{intl.messages.privacy_policy}</NavLink></li>
                        <li><NavLink to="/help_Center">{intl.messages.term_of_use}</NavLink></li>
                    </ul>
                    <PaymentCard />
                </div>
                <div className="rightBlock">
                    <div className="rightBlock_menu">
                        <ul>
                            <li className="mx-2">
                                <a
                                    href="https://www.facebook.com/Mylot_-108037730954035/"
                                    target="_blank"
                                    className="social_Icon"
                                >
                                    <img src={facebook} alt="FACEBOOK" />
                                </a>
                            </li>
                            <li className="mx-2">
                                <a
                                    className="font-16"
                                    href="mailto:info@mylot.am"
                                >
                                    <img src={google} alt="GOOGLE" className="blockGoogle_img" />
                                </a>
                            </li>
                            <li className="mx-2">
                                <a
                                    href="https://www.instagram.com/mylot2020/?hl=ru&fbclid=IwAR0_ahPL7Ku-Q_KRt1kW_paKbP6tDGhVH0yFr8oh2ZdzgXwfgTc5iZojCHI"
                                    target="_blank"
                                    className="social_Icon"
                                >
                                    <img src={instagram} alt="INSTAGRAM" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="">{intl.messages.footer.footer_contact}</h3>
                    <div className="leftBlock_contactUsBlock">
                        <div className="leftBlock_contactUs mt-3">
                            <img src={location} alt="PIN_WHITE" className="leftBlock_img" />
                            <span className="font-16 ml-3">{intl.messages.footer.footer_addres}</span>
                        </div>
                        <div className="leftBlock_contactUs mt-3">
                            <img src={mail} alt="MAIL_WHITE" className="leftBlock_img" />
                            <span className="font-16 ml-3">info@mylot.am</span>
                        </div>
                        <div className="leftBlock_contactUs mt-3">
                            <img src={phone} alt="CALL_WHITE" className="leftBlock_img" />
                            <span className="font-16 ml-3">+374 93979787</span>
                        </div>
                    </div>
                    <div className="card-component">
                        <PaymentCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer