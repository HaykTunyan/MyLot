import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { DatePicker } from 'antd';
import moment from 'moment';

const ChooseDateModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';

  return (
    <>

      <button onClick={handleShow} className="btn btn-link mt-5"> Go Live </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title className="text-center w-100">Choose date</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <div className="">
            <RangePicker
              defaultValue={[
                moment('2020/06/06', dateFormat),
                moment('2020/06/16', dateFormat)]}
              format={dateFormat}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Go Live
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ChooseDateModal