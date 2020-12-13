import React, { useState } from 'react';
import './user-registration.scss';
import './user-registration-media.scss';
import { Link } from 'react-router-dom';
import { register_req } from '../../api/user/user.register.api';
import { useIntl } from 'react-intl';
import UserRegistrationTitle from './user-registration-title/user-registration-title';
import RegisterModal from '../modal-popup/register-modal/register-modal';

const Registration = () => {
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState('');
  const [checkeds, setChecked] = useState(false);
  const intl = useIntl();
  const [state, setState] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '+374',
    login: '',
    password: '',
    password_confirmation: '',
    checked: false,
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const onClick = () => {
    let name = state.name;
    let surname = state.surname;
    let email = state.email;
    let phone = state.phone;
    let login = state.login;
    let password = state.password;
    let password_confirmation = state.password_confirmation;
    let checkeds = state.checked;
    const registerUser = async () => {
      try {
        const registerUserForm = await register_req(
          name,
          surname,
          email,
          phone,
          login,
          password,
          password_confirmation,
          checkeds
        );
        setSubmitted(!submitted);
        setSuccess(registerUserForm);
      } catch (e) {
        console.log('giftCards', e.response);
        setError(e.response);
      }
    };
    registerUser();
  };

  return (
    <div className="user-registration">
      <div className="registration-left-bg">
        <div className="registration-image-title d-none d-md-block">
          {intl.messages.registration.registration_image_title}
        </div>
        <div className="registration-image-subtitle d-none d-md-block">
          {intl.messages.registration.registration_image_subtitle}
        </div>
      </div>
      <div className="registration-block">
        <UserRegistrationTitle />
        <div className="input-text">
          <div className="registration-input">
            <input
              type="text"
              name="name"
              placeholder={intl.messages.registration.name}
              value={state.name}
              onChange={handleChange}
            />
            <span className="text-danger">
              {!submitted && error ? error.data.errors.name : null}
            </span>
          </div>
          <div className="registration-input">
            <input
              type="text"
              name="surname"
              placeholder={intl.messages.registration.sure_name}
              value={state.surname}
              onChange={handleChange}
            />
            <span className="text-danger">
              {!submitted && error ? error.data.errors.surname : null}
            </span>
          </div>
          <div className="registration-input">
            <input
              type="email"
              name="email"
              placeholder={intl.messages.registration.email}
              value={state.email}
              onChange={handleChange}
            />
            <span className="text-danger">
              {!submitted && error ? error.data.errors.email : null}
            </span>
          </div>
          <div className="registration-input">
            <input
              type="phone"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
            <span className="text-danger">
              {!submitted && error ? error.data.errors.phone : null}
            </span>
          </div>
          <div className="registration-input">
            <input
              type="text"
              name="login"
              placeholder={intl.messages.registration.last_login}
              value={state.login}
              onChange={handleChange}
            />
            <span className="text-danger">
              {!submitted && error ? error.data.errors.login : null}
            </span>
          </div>
          <div className="registration-input">
            <input
              type="password"
              name="password"
              placeholder={intl.messages.registration.password}
              value={state.password}
              onChange={handleChange}
            />
            <span className="text-danger">
              {!submitted && error ? error.data.errors.password : null}
            </span>
          </div>
          <div className="registration-input">
            <input
              type="password"
              name="password_confirmation"
              placeholder={intl.messages.registration.confirme_password}
              value={state.password_confirmation}
              onChange={handleChange}
            />
            {console.log('success', success)}
            <span className="text-danger">
              {!submitted && error
                ? error.data.errors.password_confirmation
                : null}
            </span>
          </div>
        </div>
        <div className="register-user-check">
          <div className="input-check">
            <input
              id="checkbox-input-2"
              name="checkbox"
              type="checkbox"
              value="myValue 2"
              onChange={() => setChecked(!checkeds)}
            />
            <label
              htmlFor="checkbox-input-2"
              className="input-helper input-helper--checkbox"
            >
              <Link to="/politics">
                {intl.messages.registration.assess_low}
              </Link>
            </label>
          </div>
          <div className="error-text">
            <span className="text-danger">
              {!submitted && error
                ? error.data.errors.agree_to_the_terms_of_the_site
                : null}
            </span>
          </div>
        </div>
        <div className="success-request">
        {success.status === 'Success' 
        ? (<RegisterModal  />)  
        : null
        
        }
        </div>
        <div className="registration-button">
          <button onClick={onClick}>
            {intl.messages.registration.registration_title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
