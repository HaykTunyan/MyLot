import React from "react";
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import Avatar from '../../../assets/images/Header/user.svg';
import { useIntl } from 'react-intl';

const UserIcon = () => {
    const intl = useIntl();
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/userAuction" className="font-14">{intl.messages.my_lot}</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/purchases" className="font-14">{intl.messages.participating_lots.title}</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/favoritesContainer" className="font-14">{intl.messages.favorites.favorites_title}</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/usersettings" className="font-14">{intl.messages.settings.settings_title}</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4">
                <div>
                    <Link to="/sign-out" className="font-14">{intl.messages.sign_out.button_out}</Link>
                </div>
            </Menu.Item>
        </Menu>
    );
    return (
        <ul className="align-items-center mx-2 nav">
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <img
                        src={Avatar}
                        alt="USER"
                    />
                </a>
            </Dropdown>
        </ul>
    )
}

export default UserIcon