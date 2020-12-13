import React from "react";
import './user-update.scss';
import { useSelector } from 'react-redux';
import { Form, Row } from 'react-bootstrap';
import { Divider } from 'antd';
import ChangePhoneNumber from "./change-phone-number";
import ChangeEmailAddress from "./change-email-address";
import ChangePassword from "./change-password";

const ProfileSettings = () => {

    return (
        <div className="d-flex">
            <Form className="w-100 p-3">
                <ChangePassword />
                <ChangeEmailAddress />
                <ChangePhoneNumber />
                <Divider />
            </Form>
        </div>
    )
}

export default ProfileSettings