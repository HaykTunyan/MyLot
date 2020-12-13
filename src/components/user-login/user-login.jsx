import React, { useState } from 'react';
import './user-login.scss';
import './user-login-media.scss';
import { Redirect, NavLink } from 'react-router-dom';
import { login_req, auth_me_req } from '../../api/user-login/user.login.api';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import UserLoginTitle from './user-login-title/user-login-title';

const Login = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState(false);
  const [state, setState] = useState({
    login: '',
    password: '',
  });
  const intl = useIntl();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const onClick = () => {
    let login = state.login;
    let password = state.password;
    const loginUser = async () => {
      try {
        const loginForm = await login_req(login, password);
        setSubmitted(!submitted);
        setState(loginForm);
        setSuccess(loginForm);
        if (loginForm.access_token) {
          localStorage.setItem('token', loginForm.access_token);
          const token = localStorage.token;
          const authForm = await auth_me_req(token);
          dispatch({ type: 'USER_REDUCER', authForm });
          setToken(authForm);
        }
      } catch (e) {
        console.log('giftCards', e.response);
        setError(e.response);
      }
    };
    loginUser();
  };

  return (
    <div className="user-login">
      <div className="login-left-bg">
        <div className="login-image-title d-none d-md-block">
          {intl.messages.registration.registration_image_title}
        </div>
        <div className="login-image-subtitle d-none d-md-block">
          {intl.messages.registration.registration_image_subtitle}
        </div>
      </div>
      <UserLoginTitle />
      <div className="user-login-input">
        <input
          type="text"
          name="login"
          placeholder={intl.messages.loginUser.login_title}
          value={state.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder={intl.messages.loginUser.login_password}
          value={state.password}
          onChange={handleChange}
        />
        <div className="user-login-error">
          <div className="error-login">
            {error && error.data.errors.login ? error.data.errors.login : null}
          </div>
          <div className="error-login">
            {error && error.data.errors.password
              ? error.data.errors.password
              : null}
          </div>
        </div>
        <NavLink to="/forgot-password">
          {intl.messages.loginUser.forgote_password}
        </NavLink>
        <div className="user-login-button">
          <button onClick={onClick}>
            <span>{intl.messages.loginUser.login_title}</span>
            {token.data ? <Redirect to="/home" /> : null}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
