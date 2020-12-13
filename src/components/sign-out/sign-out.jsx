import React, { useState, useEffect } from 'react';
import './sign-out.scss';
import { useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { logOut_req } from '../../api/sign-out/sign.out.api';
import { useIntl } from 'react-intl';

const SignOut = () => {
    const token = localStorage.token;
    const intl = useIntl();
    const [state, setState] = useState('')
    const [error, setError] = useState('')
    const [tokenUser, setTokenUser] = useState(false)
    const dispatch = useDispatch()
    const logOut = async () => {
        try {
            const logOutUser = await logOut_req(token);
            dispatch({ type: 'LOG_OUT', logOutUser })
            if (!token) {
                return <Redirect to="/home" />
            }
        } catch (e) {
            console.log(' error send response ', e.response);
            setError(e.response);
        }
    }
    return (
        <div className="sign-out">
            <p className="">{intl.messages.sign_out.title}</p>
            <div>
                <button className="sign-out-button">
                    <NavLink to="/home">
                        <span>{intl.messages.sign_out.button_return}</span>
                    </NavLink>
                </button>
                <button className="sign-out-button" onClick={logOut}>
                    <NavLink to="/home">
                        <span>{intl.messages.sign_out.button_out}</span>
                    </NavLink>
                </button>
            </div>
            {state ? <Redirect to="/home" /> : null}
        </div>
    )
}
export default SignOut