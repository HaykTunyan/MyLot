import React from 'react';
import './help-center.scss';
import HelpTop from '../../assets/images/AboutUs/About_top.png';
import HelpUnder from '../../assets/images/AboutUs/About_under.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import amex from '../../assets/images/Payment_logos_all/amex_logo.png';
import arca from '../../assets/images/Payment_logos_all/arca_logo.png';
import mastercard from '../../assets/images/Payment_logos_all/mastercard_logo.png';
import visa from '../../assets/images/Payment_logos_all/visa_logo.png';
import { useIntl } from 'react-intl';

const HelpCenter = () => {
  const [hakirch, setHakirc] = useState(false);
  const [naxaban, setNaxaban] = useState(false);
  const [help, setHelp] = useState(false);
  const [win, setWin] = useState(false);
  const [sms, setSms] = useState(false);
  const [commision, setCommision] = useState(false);
  const [possible, setPossible] = useState(false);
  const intl = useIntl();

  const hakirchFn = () => {
    setHakirc(!hakirch);
  };
  const naxabanFn = () => {
    setNaxaban(!naxaban);
  };
  const helpFn = () => {
    setHelp(!help);
  };
  const winFn = () => {
    setWin(!win);
  };
  const smsFn = () => {
    setSms(!sms);
  };
  const commisionFn = () => {
    setCommision(!commision);
  };
  const possibleFn = () => {
    setPossible(!possible);
  };

  return (
    <React.Fragment>
      <div className="help-center">
        <img src={HelpTop} alt="ABOUT_TOP" className="help-center-top" />
        <div className="container">
          <h3 className="text-center font-22 font-weight-bold">
            {intl.messages.help_center.help_title}
          </h3>
          <div className="text-justify m-3 m-md-5">
            <ul>
              <div className="help-center-block ">
                <li onClick={hakirchFn}>1.{intl.messages.help_center.brief}</li>
                {hakirch ? (
                  <p className="card card-body">
                    <span>{intl.messages.help_center.brief_title_1}</span>
                    <span>{intl.messages.help_center.brief_title_2}</span>
                    <span>{intl.messages.help_center.brief_title_3}</span>
                    <span>{intl.messages.help_center.brief_title_4}</span>
                    <span>{intl.messages.help_center.brief_title_5}</span>
                    <span>{intl.messages.help_center.brief_title_6}</span>
                    <span>{intl.messages.help_center.brief_title_7}</span>
                    <span>{intl.messages.help_center.brief_title_8}</span>
                    <span>{intl.messages.help_center.brief_title_9}</span>
                    <span>{intl.messages.help_center.brief_title_10}</span>
                    <span>{intl.messages.help_center.brief_title_11}</span>
                    <span>{intl.messages.help_center.brief_title_12}</span>
                    <span>{intl.messages.help_center.brief_title_13}</span>
                    <span>{intl.messages.help_center.brief_title_14}</span>
                    {intl.messages.help_center.brief_title}
                  </p>
                ) : null}
              </div>
              <div className="help-center-block">
                <li onClick={naxabanFn}>
                  2.{intl.messages.help_center.preface}
                </li>
                {naxaban ? (
                  <p className="card card-body">
                    {intl.messages.help_center.preface_title}
                  </p>
                ) : null}
              </div>
              <div className="help-center-block">
                <li onClick={helpFn}>
                  3.{intl.messages.help_center.how_to_use}
                </li>
                {help ? (
                  <p className="card card-body">
                    <span>{intl.messages.help_center.how_to_use_title_1}</span>
                    <span>{intl.messages.help_center.how_to_use_title_2}</span>
                    <span>{intl.messages.help_center.how_to_use_title_3}</span>
                    <span>{intl.messages.help_center.how_to_use_title_4}</span>
                  </p>
                ) : null}
              </div>
              <div className="help-center-block">
                <li onClick={winFn}>
                  4.{intl.messages.help_center.after_the_victory}
                </li>
                {win ? (
                  <p className="card card-body">
                    <span>
                      {intl.messages.help_center.after_the_victory_title_1}
                    </span>
                    <span>
                      {intl.messages.help_center.after_the_victory_title_2}
                    </span>
                    <span>
                      {intl.messages.help_center.after_the_victory_title_3}
                    </span>
                    <span>
                      {intl.messages.help_center.after_the_victory_title_4}
                    </span>
                    <span>
                      {intl.messages.help_center.after_the_victory_title_5}
                    </span>
                    <span>
                      {intl.messages.help_center.after_the_victory_title_6}
                    </span>
                    <span>
                      {intl.messages.help_center.after_the_victory_title_7}
                    </span>
                  </p>
                ) : null}
              </div>
              <div className="help-center-block">
                <li onClick={smsFn}>
                  5.{intl.messages.help_center.messages_other_benefits}
                </li>
                {sms ? (
                  <p className="card card-body">
                    {intl.messages.help_center.messages_other_benefits_title}
                  </p>
                ) : null}
              </div>
              <div className="help-center-block">
                <li onClick={commisionFn}>
                  6.{intl.messages.help_center.about_commission}
                </li>
                {commision ? (
                  <div className="">
                    <p className="card card-body">
                      {' '}
                      {intl.messages.help_center.about_commission_title}
                    </p>
                    <p className="d-flex justify-content-center d-none d-lg-block">
                      <ul className="d-flex justify-content-center">
                        <li className="mx-2">
                          <NavLink to="/">
                            <img
                              src={amex}
                              alt="AMEX-LOGO"
                              className="payment_Icon"
                            />
                          </NavLink>
                        </li>
                        <li className="mx-2">
                          <NavLink to="/">
                            <img
                              src={arca}
                              alt="ARCA-LOGO"
                              className="payment_Icon"
                            />
                          </NavLink>
                        </li>
                        <li className="mx-2">
                          <NavLink to="/">
                            <img
                              src={mastercard}
                              alt="MASTERCARD-LOGO"
                              className="payment_Icon"
                            />
                          </NavLink>
                        </li>
                        <li className="mx-2">
                          <NavLink to="/">
                            <img
                              src={visa}
                              alt="VISA-LOGO"
                              className="payment_Icon"
                            />
                          </NavLink>
                        </li>
                      </ul>
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="help-center-block">
                <li onClick={possibleFn}>
                  7.{intl.messages.help_center.possible}
                </li>
                {possible ? (
                  <p className="card card-body">
                    <span>{intl.messages.help_center.possible_title_1}</span>
                    <span>{intl.messages.help_center.possible_title_2}</span>
                    <span>{intl.messages.help_center.possible_title_3}</span>
                    <span>{intl.messages.help_center.possible_title_4}</span>
                    <span>{intl.messages.help_center.possible_title_5}</span>
                    <span>{intl.messages.help_center.possible_title_6}</span>
                    <span>{intl.messages.help_center.possible_title_7}</span>
                    <span>{intl.messages.help_center.possible_title_8}</span>
                    <span>{intl.messages.help_center.possible_title_9}</span>
                    <span>{intl.messages.help_center.possible_title_10}</span>
                    <span>{intl.messages.help_center.possible_title_11}</span>
                    <span>{intl.messages.help_center.possible_title_12}</span>
                    <span>{intl.messages.help_center.possible_title_13}</span>
                    <span>{intl.messages.help_center.possible_title_14}</span>
                    <span>{intl.messages.help_center.possible_title_15}</span>
                    <span>{intl.messages.help_center.possible_title_16}</span>
                  </p>
                ) : null}
              </div>
            </ul>
          </div>
        </div>
        <div className="help-img-two">
          <img src={HelpUnder} alt="ABOUT_UNDER" className="about_under" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HelpCenter;
