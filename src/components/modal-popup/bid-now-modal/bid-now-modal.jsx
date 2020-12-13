import React, { useState } from 'react';
import './bid-now-modal';
import { Modal } from 'react-bootstrap';
import { Divider } from 'antd';
import { axiosAuthInstance } from '../../../api/auth.config';
import { payment_req } from '../../../api/payment/payment.api';
import { bidRequest_req } from '../../../api/bid-request/bid.request.api';
import { useIntl } from 'react-intl';

const BidNowModal = (props, price) => {
    console.log("props", price)
    const intl = useIntl();
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [state, setState] = useState({
        price: "",
        buyNow: ""
    });
    const [success, setSuccess] = useState(false);
    const handleClose = () => setShow(false);
    const bidShow = () => setShow(true);

    // const user = useSelector(state => state.user);
    // const productBuyNow = props.product ;

    // const productId = props.product.data.id ;

    const onClickBid = () => {
        let price = state.price
        let currency = props.data.currency

        const productId = props.data.id
        const bidRequest = async () => {
            try {
                const bidRequestForm = await bidRequest_req(productId, price, currency);

                setSuccess(bidRequestForm)
                setState(bidRequestForm)

            } catch (e) {
                console.log('giftCards', e.response);
                setError(e.response);
            }
        }
        bidRequest()
    };

    return (
        <React.Fragment>

            <button
                className="bid-button"
                onClick={bidShow}
            >
                <span className="">
                    {intl.messages.product_info.take_step}
                </span>
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header className="border-0 delete-product d-flex flex-column">
                    <Modal.Title className="w-100 text-center font-24 Monsterrat_Regular">
                        <span className="">{intl.messages.modal.buy_now_title}</span>
                    </Modal.Title>
                    <div className="w-100 text-center">
                        <span>{error ? error.message : null}</span>
                    </div>
                    {/* <div className="w-100 d-flex justify-content-around mt-3">
                        <div>
                            <span className="font-14 Sans_Regular">
                                {intl.formatNumber(props.data.highest_suggestion)}
                                <span className="ml-1"></span>
                                {props.data.currency}
                            </span>
                        </div>
                        <div>
                            <span className="font-14 font-weight-bold">
                                <span className="ml-1"></span>
                                {props.data.currency}
                            </span>
                        </div>
                    </div> */}
                </Modal.Header>
                <Divider />
                <Modal.Footer className="border-0 d-flex justify-content-around">
                    <button className="btn buyCancel font-16" onClick={handleClose}>
                        {intl.messages.no}
                    </button>
                    <button className="btn buySucces font-16" onClick={() => onClickBid()}>
                        {intl.messages.yes}
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )

}

export default BidNowModal