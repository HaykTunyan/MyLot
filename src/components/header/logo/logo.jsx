import React from 'react';
import '../header.scss';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/home">
        <img src={require('../../../assets/images/Header/mylot.png')} alt="MYLOT" className="logoImg" />
      </NavLink>
    </div>
  )
}

export default Logo