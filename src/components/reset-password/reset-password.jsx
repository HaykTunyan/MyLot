import React, { useState } from 'react';
import './reset-password.scss';
import { resetPassword_req } from '../../api/user-login/user.login.api';
import { useHistory, Redirect, useLocation } from 'react-router-dom';
import ButtonComponent from '../../app-components/button/button.components';

const ResetPassword = (props) => {

    const location = useLocation()
    const token = location.pathname.slice(26)

    const [state, setState] = useState({
        password: '',
        password_confirmation: ''
    })
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const resetPassword = () => {
        let password = state.password
        let passwordConfirmation = state.password_confirmation
        const resetPasswordReq = async () => {
            try {
                const userPassword = await resetPassword_req(token, password, passwordConfirmation)
                setSuccess(true)
            } catch (e) {
                console.log('giftCards', e.response);
                setError(e.response)
            }
        }
        resetPasswordReq()
    }

    return (
        <div className="forgot-password container">
            <div className='row'>
                <div className="col-12 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6  card my-5">
                    <h4 className="text-center mt-3 font-30 Monsterrat_Medium">Վերականգնել գաղտնաբառը</h4>
                    <p className="text-center Sans_Regular ">Մուտքագրեք ձեր էլ. Փոստը, և մենք ձեզ կուղարկենք գաղտնաբառի ծածկագիրը</p>

                    <div className='form-group'>
                        <input
                            type='password'
                            name='password'
                            placeholder='Գաղտնաբառ'
                            value={state.password}
                            onChange={handleChange}
                            className={'form-control'}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            name='password_confirmation'
                            placeholder='Կրկնել գաղտնաբառը'
                            value={state.password_confirmation}
                            onChange={handleChange}
                            className={'form-control'}
                        />
                    </div>
                    {success ? <Redirect to="/home" /> : null}
                    <div className="text-center py-3">
                        <ButtonComponent
                            _onClick={() => resetPassword()}
                            text={'Փոխել գաղտնաբառը'}
                        />
                    </div>
                    <div className='error-change-password'>
                        {error ? error.data.errors.password.map(item => item) : null}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword