import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './user-update.scss';
import { emailAddress_req } from '../../../api/user-setings/email.address.api';
import { useIntl } from 'react-intl';

const ChangeEmailAddress = () => {
    const [state, setState] = useState({
        email: ''
    });
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const intl = useIntl();
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };

    const onClick = () => {
        let email = state.email
        const emailAddres = async () => {
            try {
                const emailAddresForm = await emailAddress_req(
                    email
                );
                setSubmitting(!submitting)
                setState(emailAddresForm)
            } catch (e) {
                console.log(' error eamil response ', e.response);
                setError(e.response);
            }
        }
        emailAddres()
    };

    return (
        <div className="phone_number form-group">
            <div className="email-input mr-md-3">
                <input
                    type="text"
                    name="email"
                    placeholder={intl.messages.settings.change_phone_number}
                    value={state.email}
                    onChange={handleChange}
                />
                <span className="text-danger">
                    {error ? error.data.errors.email : null}
                </span>
            </div>
            <div className="chane_phone_button ">
                <button
                    type="button"
                    className="btn"
                    onClick={onClick}
                >
                    {submitting
                        ? <Link to="/home">{intl.messages.settings.settings_step_onebutton}</Link>
                        : <span>{intl.messages.settings.settings_step_onebutton}</span>
                    }
                </button>
            </div>
        </div>
    )
}

export default ChangeEmailAddress