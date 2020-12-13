import React, { useEffect } from 'react';
import './about-us.scss';
import AboutTop from '../../assets/images/AboutUs/About_top.png';
import AboutUnder from '../../assets/images/AboutUs/About_under.png';
import facebook from '../../assets/images/Footer/facebook.svg';
import instagram from '../../assets/images/Footer/instagram.svg';
import google from '../../assets/images/Footer/google@2x.png';
import { useIntl } from 'react-intl';

import { aboutUs_req } from '../../api/about-us/about-us.api';

const AboutUs = () => {

    useEffect(() => {
        const aboutUs = async () => {
            try {
                const aboutUsReq = await aboutUs_req();
                console.log("about", aboutUsReq)
            } catch (e) {
                console.log("e", e.response);
            }
        };
        aboutUs();
    }, []);

    const intl = useIntl();

    return (
        <div className="about-container">
            <img
                src={AboutTop}
                alt="ABOUT_TOP"
                className="about-top-img about-img d-none d-lg-block"
            />
            <div className="container about-info">
                <h3 className="text-center Monsterrat_Medium font-22 font-weight-bold">
                    {intl.messages.about_us}
                </h3>

                <div className="text-justify m-4 m-md-5 font-14">
                    <p className="text-left">
                        {intl.messages.Hello}
                    </p>
                    <p>
                        {intl.messages.about_us_page.title_one}
                    </p>
                    <p>
                        {intl.messages.about_us_page.title_two}
                    </p>
                    <p>
                        {intl.messages.about_us_page.title_three}
                    </p>
                </div>
                <div className="about-us-soc">
                    <ul className="leftBlock_contact">
                        <li className="mx-2">
                            <a href={` https://www.facebook.com/Mylot_-108037730954035/ , '_blank ' `} >
                                <img
                                    src={facebook}
                                    alt="FACEBOOK"
                                />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href={`https://www.facebook.com/Mylot_-108037730954035/, '_blank'`}>
                                <img
                                    src={google}
                                    alt="GOOGLE"
                                    className="blockGoogle_img"
                                />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="https://www.instagram.com/mylot2020/?hl=ru&fbclid=IwAR0_ahPL7Ku-Q_KRt1kW_paKbP6tDGhVH0yFr8oh2ZdzgXwfgTc5iZojCHI" target="_blank">
                                <img
                                    src={instagram}
                                    alt="INSTAGRAM"
                                />
                            </a>
                        </li>
                    </ul>
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
    )
}

export default AboutUs