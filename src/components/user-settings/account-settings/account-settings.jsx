import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './account-settings.scss';
import { profile_req } from '../../../api/user-setings/profile.api';
import { useIntl } from 'react-intl';

const UserSettings = () => {

    const [state, setState] = useState({
        name: "",
        surname: ""
    });
    const intl = useIntl();
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [success, unSuccess] = useState('');
    const user = useSelector(state => state.user)
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };

    const onClick = () => {
        let name = state.name
        let surname = state.surname
        const profileUser = async () => {
            try {
                const profileUserForm = await profile_req(
                    name,
                    surname
                );
                setSubmitting(!submitting)
                setState(profileUserForm)
            } catch (e) {
                console.log(' error response ', e.response);
                setError(e.response);
            }
        }
        profileUser()
    };

    return (
        <div className="d-flex justify-content-center">
            <form >
                <div className="Profile">
                    <div className="profile_name_1 form-group">
                        <input
                            type="text"
                            name="name"
                            // placeholder={user && user.data ? user.data.name : null}
                            placeholder= {intl.messages.registration.name}
                            className='profile_name'
                            value={state.name}
                            onChange={handleChange}
                        />
                        {error ? error.data.errors.name : null}
                    </div>
                    <div className="profile_name_1 form-group">
                        <input
                            type="text"
                            name="surname"
                            // placeholder={user && user.data ? user.data.surname : null}
                            placeholder={intl.messages.registration.sure_name}
                            className="profile_name"
                            value={state.surname}
                            onChange={handleChange}
                        />
                        {error ? error.data.errors.surname : null}
                    </div>
                    <button
                        type="button"
                        className="btn profile_submit"
                        onClick={onClick}
                    >
                        {submitting
                            ? <Link>{intl.messages.settings.settings_step_onebutton}</Link>
                            : <span>{intl.messages.settings.settings_step_onebutton}</span>
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserSettings