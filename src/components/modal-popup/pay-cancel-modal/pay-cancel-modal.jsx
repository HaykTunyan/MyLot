import React, { useState } from 'react';
import classes from '../ModalPopup.module.css';
import '../modalpopup.scss';
import { Modal } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { Checkbox } from 'antd';
import { paymentFinishCancelTakeLot_req, paymentFinishCancelGiveLot_req } from '../../../api/payment/payment.api';

const PayCancelModal = ({ item }) => {
  console.log('item', item);
  const intl = useIntl();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [payment, setPayment] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const paymentRequest = (id) => {
    const paymentReq = async () => {
      try {
        const payment = await paymentFinishCancelTakeLot_req(id);

        if (payment.url) {
          const url = payment.url;
          window.location.assign(`${url}`);
        }
        setPayment(payment);
      } catch (e) {}
    };
    paymentReq();
  };

  const paymentRequestGiveLot = (id) => {
    const paymentReq = async () => {
      try {
        const payment = await paymentFinishCancelGiveLot_req(id);

        if (payment.url) {
          const url = payment.url;
          window.location.assign(`${url}`);
        }
        setPayment(payment);
      } catch (e) {}
    };
    paymentReq();
  };

  return (
    <>
      <button onClick={handleShow} className="button-cancel mx-1">
        {intl.messages.pay_cancel_btn}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0 delete-product">
          <Modal.Title className="w-100 text-center font-20 Monsterrat_Regular">
            {payment.status === 'Error' ? (
              <p className="">{payment.message}</p>
            ) : (
              <p className="time-danger">
                {intl.messages.modal.cancel_modal_title}
              </p>
            )}
            {/* {intl.messages.delete_text} */}
          </Modal.Title>
          <span>{error ? error.message : null}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center"></div>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-around">
          <button
            className={`btn ${classes.deleteCancel} font-16 `}
            onClick={handleClose}
          >
            {intl.messages.no}
          </button>
          {/* <button className={`btn ${classes.deleteDelete} font-16 `} onClick={() => paymentRequest(item.finishedAuction.data.id)}>
            {intl.messages.yes}
          </button> */}
          <button
            className={`btn ${classes.deleteDelete} font-16 `}
            onClick={() => paymentRequestGiveLot(item.finishedAuction.data.id)}
          >
            {intl.messages.yes}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PayCancelModal