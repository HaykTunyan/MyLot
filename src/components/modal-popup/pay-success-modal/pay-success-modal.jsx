import React, { useState } from 'react';
import classes from '../ModalPopup.module.css';
import './pay-success-modal.scss';
import '../modalpopup.scss';
import { Modal } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import {
  paymentFinishCancelGiveLotCardNumber_req,
  paymentFinishCancelTakeLot_req,
  paymentFinishConfirm_req,
} from '../../../api/payment/payment.api';

function onChange(e) {
  console.log('onCHnage', e.target.checked);
}

const PaySuccessModal = ({ item }) => {
  const intl = useIntl();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [payment, setPayment] = useState('');
  const [checkeds, setChecked] = useState(false);
  const [state, setState] = useState({
    name: '',
    surname: '',
    cardNumber: '',
    checked: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const paymentRequest = (id) => {
    let name = state.name;
    let surname = state.surname;
    let cardNumber = state.cardNumber;
    let checked = state.checked;

    const paymentReq = async () => {
      try {
        const payment = await paymentFinishCancelGiveLotCardNumber_req(
          id,
          name,
          surname,
          cardNumber,
          checkeds
        );

        if (payment.url) {
          const url = payment.url;
          window.location.assign(`${url}`);
        }
        setPayment(payment);
      } catch (e) {}
    };
    paymentReq();
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <>
      <button onClick={handleShow} className="button-success mx-1">
        {intl.messages.pay_success_btn}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0 delete-product">
          {payment.status === 'Error' ? (
            <p className="">{payment.message}</p>
          ) : (
            <p className="header_blue">
              {intl.messages.modal.success_modal_title}
            </p>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center pay-success">
            <form>
              <div class="form-group">
                <label className="">{intl.messages.registration.name}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={intl.messages.registration.name}
                  value={state.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div class="form-group">
                <label>{intl.messages.registration.sure_name}</label>
                <input
                  type="text"
                  name="surname"
                  placeholder={intl.messages.registration.sure_name}
                  value={state.surname}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div class="form-group ">
                <label>{intl.messages.registration.user_card_number}</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder={intl.messages.registration.sure_name}
                  value={state.cardNumber}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  id="checkbox-input-2"
                  name="checkbox"
                  type="checkbox"
                  value="myValue 2"
                  onChange={() => setChecked(!checkeds)}
                />
                <label
                  for="checkbox-input-2"
                  class="input-helper input-helper--checkbox"
                >
                  {intl.messages.registration.assess_low}
                </label>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-around">
          <button
            className={`btn ${classes.deleteCancel} font-16 `}
            onClick={handleClose}
          >
            {intl.messages.no}
          </button>
          <button
            className={`btn ${classes.deleteDelete} font-16 `}
            onClick={() => paymentRequest(item.finishedAuction.data.id)}
          >
            {intl.messages.yes}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PaySuccessModal;
