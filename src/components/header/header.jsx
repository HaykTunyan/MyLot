import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './header.scss';
import HeaderRight from './header-right/header-right';
import Logo from './logo/logo';
import UserIcon from './user/user';
import Registers from './register/register';
import { Navbar, Nav } from 'react-bootstrap';
import Search from './search/search';
import CategoryList from './category-list/category-list'
import { getCategory_req } from '../../api/category-list/category.list.api';
import { auth_me_req } from '../../api/user-login/user.login.api';
import { useIntl } from 'react-intl';

const Header = () => {

  const token = localStorage.token;
  const intl = useIntl();
  const [category, setCategory] = useState([])
  const [tokenUser, setTokenUser] = useState(false)
  const [drop, setDrop] = useState(false)
  const [open, setOpen] = useState(false);
  const [dropFirstAnimation, setDropFirstAnimation] = useState(0)
  const [dropSecondAnimation, setDropSecondAnimation] = useState(0)
  const [closeGorcnker, setCloseGorcnker] = useState(false)
  const node = useRef();
  const user = useSelector(state => state.user)
  useEffect(() => {
    if (user.data) {
      const userToken = async () => {
        try {
          const userToken = await auth_me_req(token)
          setTokenUser(userToken)
        } catch (e) {
          // console.log('e', e.response)
        }
      }
      userToken()
    }

    const categoryList = async () => {
      try {
        const categoryList = await getCategory_req();
        setCategory(categoryList);
      } catch (e) {
        // console.log('e', e.response);
      }
    };
    categoryList()
  }, [])

  const useOnClickOutside = (ref, handler, setDrop, setDropSecondAnimation, setDropFirstAnimation, setCloseGorcnker) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        setDrop(false)
        setDropSecondAnimation(0)
        setCloseGorcnker(false)
        setDropFirstAnimation(0)
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
      [ref, handler, setDrop, setCloseGorcnker],
    );
  };
  useOnClickOutside(node, () => setOpen(false), () => setDrop(false), () => setDropFirstAnimation(0), () => setDropSecondAnimation(0), () => setCloseGorcnker(false));
  const openCategory = () => {
    setOpen(!open)
    setDrop(!drop)
    setDropSecondAnimation(0)
    setDropFirstAnimation(0)
    setCloseGorcnker(!closeGorcnker)
  }

  return (
    <div className="header">
      <Navbar className="justify-content-between navbar-custom navbar">
        <Nav className="w-100 nav">
          <div className="menu">
            <div ref={node} className="menu-button">
              <CategoryList
                data={category}
                open={open}
                setOpen={setOpen}
                setDrop={setDrop}
                drop={drop}
                dropSecondAnimation={dropSecondAnimation}
                dropFirstAnimation={dropFirstAnimation}
                setDropFirstAnimation={setDropFirstAnimation}
                setDropSecondAnimation={setDropSecondAnimation}
                closeGorcnker={closeGorcnker}
                setCloseGorcnker={setCloseGorcnker}
              />
            </div>
            <div className="menu-text d-none d-md-block">
              <p>{intl.messages.menu}</p>
            </div>
          </div>
          <Search />
        </Nav>
        <Logo />
        <Nav className="w-100 justify-content-end users-right nav">
          {
            user.data ? <UserIcon /> : <Registers />
          }
          <HeaderRight token={user.data} />
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header