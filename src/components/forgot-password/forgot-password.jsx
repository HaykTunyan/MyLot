import React, { useState } from 'react';
import './forgotpassword.scss';
import { forgotPassword_req } from '../../api/user-login/user.login.api';
import ButtonComponent from '../../app-components/button/button.components';

const ForgotPassword = () => {

    const [state, setState] = useState({ email: "" })

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const forgotPassword = () => {
        let email = state.email
        const forgotPasswordReq = async () => {
            try {
                const userPassword = await forgotPassword_req(email)
            } catch (e) {
                // console.log('giftCards', e.response);
            }
        }
        forgotPasswordReq()
    }

    return (
        <div className="forgot-password container">
            <div className="row">
                <div className="col-12 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6  card my-5">
                    <h4 className="text-center mt-3 font-30 Monsterrat_Medium">
                        Վերականգնել գաղտնաբառը
                    </h4>
                    <p className="text-center Sans_Regular">
                        Մուտքագրեք ձեր էլ. Փոստը, և մենք ձեզ կուղարկենք գաղտնաբառի ծածկագիրը
                    </p>
                    <div className="form-group">
                        <input
                            type='email'
                            name='email'
                            placeholder='Էլ․ փոստ'
                            value={state.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="text-center py-3">
                        <ButtonComponent
                            _onClick={() => forgotPassword()}
                            text={'Հայցեք գաղտնաբառի վերափոխում'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword