import React, { useState, useEffect } from 'react';
import './header.scss';
import HeaderRight from './header-right/header-right';
import Logo from './logo/logo';
import UserIcon from './user/user';
import Registers from './register/register';
import { Navbar, Nav } from 'react-bootstrap';
import Search from './search/search';
import CategoryList from './category-list/category-list';
import { getCategory_req } from '../../api/category-list/category.list.api';

const HeaderSignOut = (token) => {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState([])
  useEffect(() => {
    const categoryList = async () => {
      try {
        const categoryList = await getCategory_req();
        if (categoryList && categoryList.data) {
          setCategory(categoryList);
        }
      } catch (e) {
        // console.log('e', e.response);
      }
    };
    categoryList()
  }, [])

  const openCategory = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <Navbar className="justify-content-between navbar-custom navbar">
        <Nav className="w-100 nav">
          <div className="menu">
            <div className="menu-button" onClick={openCategory}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-text">
              <p>MENU</p>
            </div>
            {open ? <CategoryList data={category} /> : null}
          </div>
          <Search />
        </Nav>
        <Logo />
        <Nav className="w-100 justify-content-end nav">
          {
            token.tokenUser ? <UserIcon /> : <Registers />
          }
          <HeaderRight token={token.tokenUser} />
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaderSignOut