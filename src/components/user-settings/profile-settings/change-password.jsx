import React, { useState, useEffect } from 'react';
import './user-update.scss';
import { changePassword_req } from '../../../api/user-setings/change.password.api';
import ModalPopup from '../../../app-components/modal-popup/modal-popup';
import { useIntl } from 'react-intl';

const ChangePassword = () => {

    const [state, setState] = useState({
        oldPassword: "",
        newPassword: "",
        confirmationPassword: ""
    });
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const intl = useIntl();

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };
    const closeModal = () => {
        setModalOpen(false)
    }
    useEffect(() => {
        setModalOpen(true)
    }, [])

    const changePassword = () => {
        let oldPassword = state.oldPassword
        let newPassword = state.newPassword
        let confirmationPassword = state.confirmationPassword
        const passwordUser = async () => {
            try {
                const passwordUserForm = await changePassword_req(oldPassword, newPassword, confirmationPassword);
                setModalOpen(true)
                setState(passwordUserForm)
            } catch (e) {
                console.log(' error password response ', e.response);
                setError(e.response);
            }
        }
        passwordUser()
    };

    return (
        <div className="change-password form-group">
            <div className="w-100">
                <input
                    type="password"
                    name="oldPassword"
                    placeholder={intl.messages.settings.step_three_oldpassword}
                    value={state.oldPassword}
                    onChange={handleChange}
                />
            </div>
            <div className="w-100">
                <input
                    type="password"
                    name="newPassword"
                    placeholder={intl.messages.settings.step_three_newpassword}
                    value={state.newPassword}
                    onChange={handleChange}
                />
            </div>
            <div className="w-100">
                <input
                    type="password"
                    name="confirmationPassword"
                    placeholder={intl.messages.settings.step_three_confirmationpassword}
                    value={state.confirmationPassword}
                    onChange={handleChange}
                />
                <span className="text-danger">{error ? error.data.errors.password : null}</span>
                <span className='text-danger'>{state.status === 'Error' ? state.message : null}</span>
                <span className='text-danger'>{state.status === 'Success' ? state.message : null}</span>
            </div>
            <div className="change-password-button">
                <button
                    type="button"
                    className="btn"
                    onClick={changePassword}
                >
                    <span>{intl.messages.settings.settings_step_onebutton}</span>
                </button>
            </div>
            {/* {modalOpen
                ? <ModalPopup
                    _onClick={() => closeModal()}
                    text={intl.messages.settings.settings_step_threetext}
                />
                : null
            } */}

        </div>
    )
}

export default ChangePassword;