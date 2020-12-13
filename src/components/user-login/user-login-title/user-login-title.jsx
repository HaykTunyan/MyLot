import React from 'react'
import './user-login-title.scss'
import './user-login-title-media.scss'

import { NavLink } from 'react-router-dom'
import { useIntl } from 'react-intl'

const UserLoginTitle = () => {
    const intl = useIntl()
    return (
        <div className="login-title">
            <div className="login-title">
                <h3 className="">{intl.messages.loginUser.login_title}</h3>
            </div>
            <div className="login-text">
                <span className="login-subTitle">
                    {intl.messages.loginUser.login_subtitle}
                </span>
                <NavLink to={'/registration'}>
                    <span className="login-login">
                        {intl.messages.loginUser.last_registration}
                    </span>
                </NavLink>

            </div>
        </div>
    )
}
export default UserLoginTitle