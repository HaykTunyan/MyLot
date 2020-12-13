import React, { useState } from 'react';
import classes from './ModalPopup.module.css';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

Modal.setAppElement('#root')
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        backgroundColor: '#F4F6F7'
    },
    OverlayAfterOpen: {
        opacity: 1,
        backgroundColor: 'none'
    }
}

const AddItemModal = () => {
    let [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={classes.ReactModal__Content}>
            <button onClick={() => setModalIsOpen(true)} className={classes.AddItem}>Add Item</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <div className={classes.PopupModal}>
                    <button className={classes.Itemclose} onClick={() => setModalIsOpen(false)}>X</button>
                    <h4>Ցանկանում եք ավելացնել լոտ</h4>
                    <h3>Խնդրում ենք գրանցվել շարունակելու համար</h3>

                    <NavLink to="" onClick={() => setModalIsOpen(false)} className={classes.YourAccount}>Լոգին</NavLink>
                    <p>կամ</p>
                    <NavLink to="" className={classes.YourAccount}>LOGIN NOW</NavLink>
                </div>

            </Modal>
        </div>
    )
}
export default AddItemModal