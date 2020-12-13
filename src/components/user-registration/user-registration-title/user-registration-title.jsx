import React from 'react';
import './user-registration-title.scss';
import './user-registration-title-media.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

const UserRegistrationTitle = () => {
  const intl = useIntl();
  return (
    <div className="registration-title">
      <div className="register-title">
        <h3>{intl.messages.registration.registration_title}</h3>
      </div>
      <div className="registration-text">
        <span className="registration-subTitle">
          {intl.messages.registration.registration_subtitle}
        </span>
        <NavLink to={'/login'}>
          <span className="registration-login">
            {intl.messages.loginUser.login_title}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default UserRegistrationTitle;
