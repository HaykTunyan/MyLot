import React, { useState, useEffect } from 'react';
import './App.css';
import './reset.scss';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Routes from './router/Router';
import { useDispatch, useSelector } from 'react-redux';
import { auth_me_req } from './api/user-login/user.login.api';
import { getCookie } from './helpers/cookie.helpers';
import { IntlProvider } from 'react-intl';
import ScrollToTop from './app-components/scrolltotop/scrollToTop';

const getLocaleState = () => {
  const localization = getCookie('locale');
  if (!localization) {
    return 'am';
  } else {
    return localization;
  }
};

const App = () => {
  const [tokenUser, setTokenUser] = useState('');
  const state = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const token = localStorage.token;
  const locale = getLocaleState();
  useEffect(() => {
    const userToken = async () => {
      try {
        if (token) {
          const authForm = await auth_me_req(token);
          dispatch({ type: 'USER_REDUCER', authForm });
        }
      } catch (e) {
        console.log('e', e.response);
      }
    };
    userToken();
  }, []);
  return (
    <IntlProvider
      locale={locale}
      messages={require(`./localization/${locale}.json`)}
    >
      <div className="app-wrapper">
        <ScrollToTop />
        <Header />
        <main role="main" className="main-container">
          <Switch>{renderRoutes(Routes)}</Switch>
        </main>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
