import React, { useState } from 'react';
import classes from '../ModalPopup.module.css';
import '../modalpopup.scss';
import { Modal } from 'react-bootstrap';
import DELETE from "../../../assets/images/UserProduct/delete.svg";
import { deleteProduct_req } from '../../../api/product/product.api';
import { useIntl } from 'react-intl';

const DeleteModal = (props) => {
  const intl = useIntl()
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteProduct = async (id) => {
    try {
      const deleteProductReq = await deleteProduct_req(id)
      setError(deleteProductReq)

    } catch (e) {
      setError(e.response)
    }
  }
  return (
    <>
      <button onClick={handleShow} className={`btn btn-icon ${classes.Delete_modal}`}>
        <img src={DELETE} alt="DELETE" />
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0 delete-product">
          <Modal.Title className="w-100 text-center font-24 Monsterrat_Regular">
            {intl.messages.delete_text}
          </Modal.Title>
          <span>{error ? error.message : null}</span>
        </Modal.Header>
        <Modal.Footer className="border-0 d-flex justify-content-around">
          <button className={`btn ${classes.deleteCancel} font-16 `} onClick={handleClose}>
            {intl.messages.no}
          </button>
          <button className={`btn ${classes.deleteDelete} font-16 `} onClick={() => deleteProduct(props.id)}>
            {intl.messages.yes}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default DeleteModal