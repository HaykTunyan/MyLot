import React, { useState } from "react";
import './start-step-modal.scss';
import { Modal } from 'react-bootstrap';
import { Divider } from 'antd';
import { useIntl } from 'react-intl';


const StartStep = () => {

    const intl = useIntl();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const StartShow = () => setShow(true);
   

    return (
        <React.Fragment>
            <button
                className="step-btn btn"
                onClick={ StartShow }
            >
                <span className="">
                    {intl.messages.modal.start_step_btn}
                </span>
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header className="border-0 delete-product d-flex flex-column">
                    <Modal.Title className="w-100 text-center font-24 Monsterrat_Regular">
                        <span className="">{intl.messages.modal.start_step_title}</span>
                    </Modal.Title>
                    
                    {/* <div className="w-100 d-flex justify-content-around mt-3">
                        <div>
                            <span className="font-14 Sans_Regular">
                                {intl.formatNumber(props.product.data.highest_suggestion)}
                                <span className="ml-1"></span>
                                {props.product.data.currency}
                            </span>
                        </div>
                        <div>
                            <span className="font-14 font-weight-bold">
                                {intl.formatNumber(props.product.data.min_bid_price)}
                                <span className="ml-1"></span>
                                {props.product.data.currency}
                            </span>
                        </div>
                    </div> */}
                    
                </Modal.Header>
                <Divider />
                <Modal.Footer className="border-0 d-flex justify-content-around">
                    <button className="btn buyCancel font-16" onClick={handleClose}>
                        {intl.messages.no}
                    </button>
                    <button className="btn buySucces font-16">
                        {intl.messages.yes} 
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default StartStep