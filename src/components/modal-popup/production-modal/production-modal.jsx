import React, { useState } from 'react'
import classes from '../ModalPopup.module.css'
import { NavLink } from 'react-router-dom'
import { Modal, Button, ModalDialog, ModalTitle, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

const ProductionModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={classes.AddItem}> Production Modal</button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProductionModal