import React, { useState } from 'react';
import './register-modal.scss'
import { Modal } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

const RegisterModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const intl = useIntl();


  let history = useHistory();

  function gmailClick() {
    history.push(window.open( "https://mail.google.com/", '_blank'));
  }
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="register-modal"
      >
        <Modal.Header className="border-0 delete-product">
          <Modal.Title className="w-100 text-center font-24 Monsterrat_Regular">
            {intl.messages.registration.success_low}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className="border-0 d-flex justify-content-around">
          <button
            className="btn close-btnMd font-16"
            onClick={gmailClick}
          >    
            {intl.messages.pay_success_btn}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RegisterModal