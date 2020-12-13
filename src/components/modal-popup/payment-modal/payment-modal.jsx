import React, { useState, useEffect } from 'react';
import './payment-modal.scss';


const PaymentModal = (state) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {

    }, [])

    return (
        <React.Fragment>
            <div></div>
        </React.Fragment>
    )
}
export default PaymentModal