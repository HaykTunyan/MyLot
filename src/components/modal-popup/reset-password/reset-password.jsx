import React, { useState } from "react";
import classes from '../ModalPopup.module.css';
import {
  Modal,
  Button,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RessetPassword = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showResults, setShowResults] = useState(false);

  const onShowverification = () => setShowResults(true);
  const onHideverification = () => setShowResults(true);

  const [showView, setShowPass] = useState(false);
  const onShowPass = () => setShowPass(true)


  return (
    <>
      <Link onClick={handleShow} className={classes.forgot}>Forgot password ?</Link>

      <Modal show={show} onHide={handleClose} animation={false} className={` ${classes.resset} `}>
        <Modal.Header className="text-center w-100">
          <Modal.Title className="text-center font-weight-bold w-100 mt-30">Resset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body onHide={onHideverification}>
          <div className="d-flex flex-column text-center">
            <p className={`${classes.reset_title}`}>Enter your Email and we will send you reset password code</p>
            <Form className="mt-3 px-5">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" className={` ${classes.resetinput} `} />
              </Form.Group>
              <Button onClick={onShowverification} className={` ${classes.reset_btn} mt-5 btn-block`} >
                Request password reset
              </Button>
            </Form>
          </div>

        </Modal.Body>
        {showResults ?

          <Modal.Body>
            <div className="d-flex flex-column text-center">
              <p className={`${classes.reset_title}`}>
                Enter the verification code we just sent you to your email
            </p>
              <Form className="mt-3 px-5">
                <Form.Group controlId="formBasicCode">
                  <Form.Control type="number" placeholder="Enter code" className={` ${classes.resetinput} `} />
                </Form.Group>
                <Button onClick={onShowPass} className={` ${classes.reset_btn} mt-5 btn-block`} >
                  Continue
              </Button>
                <div className="d-flex justify-content-between">
                  <Link className={` text-dark `}>Didn't recive an Email?</Link>
                  <Link className={` text-dark `}>Send Email again</Link>
                </div>
              </Form>
            </div>

          </Modal.Body>
          : null}

        <Modal.Body show={showView}>
          <div className="d-flex flex-column text-center">
            <p className={`${classes.reset_title}`}>
              Enter the verification code we just sent you to your email
            </p>
            <Form className="mt-3 px-5">
              <Form.Group controlId="formBasicPass">
                <Form.Control type="password" placeholder="New password" className={` ${classes.resetinput} `} />
              </Form.Group>
              <Form.Group controlId="formBasicPass">
                <Form.Control type="password" placeholder="Confirm password" className={` ${classes.resetinput} `} />
              </Form.Group>
              <Button className={` ${classes.reset_btn} mt-5 btn-block`} >
                Request password reset
              </Button>
            </Form>
          </div>

        </Modal.Body>

      </Modal>
    </>
  );



}

export default RessetPassword