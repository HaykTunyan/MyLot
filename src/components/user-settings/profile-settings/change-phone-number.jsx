import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './user-update.scss';
import { phoneNumber_req } from '../../../api/user-setings/change.phone.api';
import { useIntl } from 'react-intl';

const ChangePhoneNumber = () => {

    const [state, setState] = useState({
        phone: ""
    });
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };
    const intl = useIntl();

    const onClick = () => {
        let phone = state.phone
        const phoneNumberUser = async () => {
            try {
                const phoneNumberUserForm = await phoneNumber_req(
                    phone
                );
                setSubmitting(!submitting)
                setState(phoneNumberUserForm)
            } catch (e) {
                console.log(' error phone response ', e.response);
                setError(e.response);
            }
        }
        phoneNumberUser()
    };

    return (
        <div className="phone_number form-group">
            <div className="phone-input mr-md-3">
                <input
                    type="number"
                    name="phone"
                    placeholder={intl.messages.settings.step_thre_phone}
                    value={state.phone}
                    onChange={handleChange}
                />
                <span className="text-danger">
                    {error ? error.data.errors.phone : null}
                </span>
            </div>
            <div className="chane_phone_button">
                <button
                    type="button"
                    className="btn"
                    onClick={onClick}
                >
                    {submitting
                        ? <Link>{intl.messages.settings.settings_step_twobutton}</Link>
                        : <span>{intl.messages.settings.settings_step_twobutton}</span>
                    }
                </button>
            </div>
        </div>
    )
}

export default ChangePhoneNumber