import React from "react";
import '../header.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import SignIn from '../../../assets/images/Header/sign-in-alt-solid.svg';

const Registers = () => {

  const intl = useIntl()

  return (
    <ul className="register_link nav">
      <NavLink to="/registration" className="register mx-sm-2 d-none d-md-block">
        {intl.messages.registration.registration_title}
      </NavLink>
      <NavLink to="/registration" className="register mx-sm-2 d-block d-md-none">
        {intl.messages.registration.registration_title}
          {/* <img src={SignIn} alt="SIGN-IN-ALT-SOLID" className="reg-icon" /> */}
      </NavLink>
      <span className="reg_span d-none d-sm-block">/</span>
      <NavLink to="/login" className="register mx-sm-2 d-none d-md-block">
        {intl.messages.loginUser.login_title}
      </NavLink>
      <NavLink to="/login" className="register mx-sm-2 d-block d-md-none">
        {intl.messages.loginUser.login_title}
      </NavLink>
    </ul>
  )
}

export default Registers