import React from "react";
import { Form } from 'react-bootstrap';
import { Checkbox } from 'antd';
import '../user-settings.scss';
import { useIntl } from 'react-intl';

const NotificetionsSettings = () => {

    function onChange(checkedValues) {
        console.log("check Notifucetion", checkedValues)
    }
    const intl = useIntl();

    return (
        <div className="d-flex justify-content-center">
            <Form className="">
                <h3 className="py-3 font-weight-bold">{intl.messages.settings.stepTwo_noficicetion_title}</h3>
                <Form.Group className="d-flex">
                    <Checkbox onChange={onChange}>{intl.messages.settings.stepTwo_noficicetion_titleone}</Checkbox>
                </Form.Group>
                <Form.Group className="d-flex">
                    <Checkbox onChange={onChange}>{intl.messages.settings.stepTwo_noficicetion_titletwo}</Checkbox>
                </Form.Group>
                <Form.Group className="d-flex">
                    <Checkbox onChange={onChange}>{intl.messages.settings.stepTwo_noficicetion_titlethree}</Checkbox>
                </Form.Group>
                <Form.Group >
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btnNotificetion">
                            {intl.messages.settings.settings_step_twobutton}
                        </button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default NotificetionsSettings