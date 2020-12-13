import React, { useState } from 'react';
import './buy-now-modal.scss';
import { Modal } from 'react-bootstrap';
import { Divider } from 'antd';
import { deleteProduct_req } from '../../../api/product/product.api';
import BigButton from '../../../app-components/big-button/big-button';
import { buyNow_req } from '../../../api/bid-request/bid.request.api';
import { payment_req } from '../../../api/payment/payment.api';
import { useIntl } from 'react-intl';

const BuyNowModal = ({ props }) => {
    console.log("props", props)
    const intl = useIntl();
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [state, setState] = useState({
        price: "",
        buyNow: ""
    });
    const [success, setSuccess] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const buyNow = () => {
        const buyNowProduct = props.data.buy_now_price
        console.log("biy", buyNowProduct)
        const currency = props.data.currency
        const productId = props.data.id
        const buyNowRequest = async () => {
            try {
                const bidRequestForm = await buyNow_req(productId, buyNowProduct, currency);
                const bidRequestFormCurrency = bidRequestForm.currency
                const bidRequestFormPrice = bidRequestForm.price
                const bidRequestFormId = bidRequestForm.bid_request_id
                const finishedFormId = bidRequestForm.finished_auction_id
                const typeFormId = bidRequestForm.type
                setSuccess(true)
                if (bidRequestForm.status === 'Success') {
                    const buyNowFunc = async () => {
                        try {
                            const buyNowPrice = await payment_req(finishedFormId, bidRequestFormId, bidRequestFormPrice, typeFormId)
                            if (buyNowPrice.url) {
                                const url = buyNowPrice.url
                                window.location.assign(`${url}`);
                            }
                        } catch (e) {
                        }
                    }
                    buyNowFunc()
                }
                setState(bidRequestForm)
            } catch (e) {
                console.log('giftCards', e.response);
                setError(e.response);
            }
        }
        buyNowRequest()
    }

    return (
        <React.Fragment>
            <BigButton
                _onClick={() => { handleShow() }}
                text={intl.messages.bid_now}
            />
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header className="border-0 delete-product d-flex flex-column">
                    <Modal.Title className="w-100 text-center font-24 Monsterrat_Regular">
                        <span className="">{intl.messages.modal.buy_now_title}</span>
                    </Modal.Title>
                    <div className="w-100 text-center">
                        <span>{error ? error.message : null}</span>
                    </div>
                    <div className="w-100 d-flex justify-content-around mt-3">
                        <div>
                            <span className="font-14 Sans_Regular">
                                {intl.messages.lot.buy_now_price}
                            </span>
                        </div>
                        <div>
                            {props.data.buy_now_price ?
                                <span className="font-14 font-weight-bold">
                                    {intl.formatNumber(props.data.buy_now_price)}
                                    <span className="ml-1"></span>
                                    {props.data.currency}
                                </span>
                                : <span className="font-14 font-weight-bold">
                                    {intl.formatNumber(props.data.buy_now_price)}
                                    <span className="ml-1"></span>
                                    {props.data.currency}
                                </span>

                            }
                            {/* <span className="font-14 font-weight-bold">
                                {intl.formatNumber(props.data.buy_now_price)}
                                <span className="ml-1"></span>
                                {props.data.currency}
                            </span> */}
                        </div>
                    </div>
                </Modal.Header>
                <Divider />
                <Modal.Footer className="border-0 d-flex justify-content-around">
                    <button className="btn buyCancel font-16" onClick={handleClose}>
                        {intl.messages.no}
                    </button>
                    <button className="btn buySucces font-16" onClick={() => buyNow()}>
                        {intl.messages.yes}
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}
export default BuyNowModal