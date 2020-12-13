import React, { useState } from 'react';
import '../modalpopup.scss';
import classes from '../ModalPopup.module.css';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useIntl } from 'react-intl';

const AddItemModal = () => {

  const [show, setShow] = useState(false);
  const intl = useIntl();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="d-none d-xl-block AddItem">{intl.messages.add_lot}</button>
      <button onClick={handleShow} className="d-block d-xl-none AddItem">
        <img src={require('../../../assets/images/Header/plus.svg')} alt="ADDPLUS" />
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton >
        </Modal.Header>
        <Modal.Body className="border-none">
          <div className="">
            <div className="">
              <h3 className="text-center font-24 Monsterrat_Medium">
                {intl.messages.settings.popup_adding_lot_title}
              </h3>
              <h3 className="text-center font-weight-bold font-24 Monsterrat_Regular">
                   {intl.messages.settings.popup_adding_lot_subtitle}
              </h3>
            </div>
            <div className="d-flex flex-column p-5">
              <NavLink className="font-18 mb-4 Sans_Regular AddItem_btn"
                onClick={handleClose} to="/login">
                  {intl.messages.registration.registration_title}
                </NavLink>
              <div className="d-flex flex-row">
                <span className="modal_border"></span>
                <span className="font-20 mx-3 Sans_Bold">
                  {intl.messages.popup_or}
                </span>
                <span className="modal_border"></span>
              </div>
              <NavLink className="font-18 mt-4 Sans_Regular AddItem_btn"
                onClick={handleClose} to="/registration">
                  {intl.messages.your_new_page}
                </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default AddItemModal