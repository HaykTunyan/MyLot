import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'antd';
import { axiosAuthInstance } from '../../api/auth.config';
import {
  bidRequest_req,
  buyNow_req,
  firstBid_req
} from '../../api/bid-request/bid.request.api';
import { formatNumberWithCharacter } from '../../utils/formatter.util';
import { useIntl } from 'react-intl';
import { payment_req } from '../../api/payment/payment.api';

import './product-page.scss';
import Locetion from '../../assets/images/UserProduct/locetion.svg';
import Preloader from '../preloader/preloader';
import CenterMode from './slick-slider/slick-slider';
import ModalPopup from '../../app-components/modal-popup/modal-popup';
import BuyNowModal from '../modal-popup/buy-now-modal/buy-now-modal';

const ProductPage = ({ props }) => {


  const intl = useIntl();
  const [state, setState] = useState({
    price: "",
    buyNow: ""
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState('');
  const [status, setStatus] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const user = useSelector(state => state.user);
  console.log("props", user);
  const productBuyNow = props.product

  const handleChange = (evt) => {
    const value = Number(evt.target.value.match(/\d+/g).join(''));
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  if (!props || !props.product || !props.product.data) {
    return <Preloader />
  }

  const productId = props.product.data.id
  const handleClick = (productId) => {
    axiosAuthInstance().post(`/wishes?product_id=${productId}`).then(response => {
      if (response.data) {
        setDisableButton(!disableButton)
        return alert(" Շնորհակալություն, այս լոտը ավելացվել է Ձեր նախընտրածների ցուցակում ")

      }
      return response.data
    })
  };

  const onClickBid = () => {
    let price = state.price
    let currency = props.product.data.currency
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


  const firstBid = () => {
    let price = props.product.data.start_price
    let currency = props.product.data.currency
    const bidFirstRequest = async () => {
      try {
        const bidRequestForm = await firstBid_req(productId, price, currency);

        setSuccess(bidRequestForm)
        setState(bidRequestForm)

      } catch (e) {
        console.log('giftCards', e.response);
        setError(e.response);
      }
    }
    bidFirstRequest()
  };

  const buyNow = () => {
    const buyNowProduct = props.product.data.buy_now_price
    const currency = props.product.data.currency
    const buyNowRequest = async () => {
      try {
        const bidRequestForm = await buyNow_req(productId, buyNowProduct, currency);
        const bidRequestFormCurrency = bidRequestForm.currency
        const bidRequestFormPrice = bidRequestForm.price
        const bidRequestFormId = bidRequestForm.bid_request_id
        setSuccess(true)
        if (bidRequestForm.status === 'Success') {

          const buyNowFunc = async () => {
            try {
              const buyNowPrice = await payment_req(bidRequestFormId, bidRequestFormPrice)
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

  if (!props.product || props.product.data.length === 0) {
    return null
  }

  return (
    <React.Fragment>
      {!props.product ? (
        <Preloader />
      ) : (
          <div className="productlive-container py-5">
            <div className="container">
              <div className="p-4 card">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    {props.product.data.media ? (
                      <div className="product-slider w-100">
                        <CenterMode
                          imgData={props.product.data.media}
                          className="w-100"
                        />
                      </div>
                    ) : (
                        <Preloader />
                      )}
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className=" ">
                      <h3 className="text-left font-weight-bold font-26 Monsterrat_Medium">
                        {props.product.data.title}
                      </h3>
                      <div className="d-flex">
                        <img src={Locetion} className=" " alt="LOCETION" />
                        <span className="ml-3">
                          {props.product.data.city.data.name}
                        </span>
                      </div>
                      <div className="mt-3">
                        {!user.data ||
                          // user.data.id === props.product.data.created_user_id ||
                          // productBuyNow.data.buy_now_price === null ||
                          // props.product.data.auction_type !== 'standard'
                          // ||
                          props.product.data.live === false ? null : (
                            <div className="d-flex justify-content-between">
                              {props.product.data.filters.data ? (
                                <div className="d-flex justify-content-between w-100">
                                  <span className="font-weight-bold font-14 Sans_Bold my-1">
                                    {intl.messages.product_info.start_date_text} :
                              </span>
                                  <span className="ml-3 font-14 time-danger my-1 font-weight-bold">
                                    {props.product.data.start_date}
                                  </span>
                                </div>
                              ) : null}
                            </div>
                          )}
                        {!user.data ||
                          // user.data.id === props.product.data.created_user_id ||
                          // productBuyNow.data.buy_now_price === null ||
                          // props.product.data.auction_type !== 'standard'
                          // ||
                          props.product.data.live === false ? null : (
                            <div className="d-flex justify-content-between">
                              {props.product.data.filters.data ? (
                                <div className="d-flex justify-content-between w-100">
                                  <span className="font-weight-bold font-14 Sans_Bold my-1">
                                    {intl.messages.product_info.end_date_text} :
                              </span>
                                  <span className="ml-3 font-14 time-danger my-1 font-weight-bold">
                                    {props.product.data.end_date}
                                  </span>
                                </div>
                              ) : null}
                            </div>
                          )}
                        <div className="d-flex flex-column my-2">
                          {props.product?.data?.filters?.data.map((item) => (
                            <div className="d-flex justify-content-between mt-3">
                              <div>
                                <span className="font-14 Sans_Regular">
                                  {item.filterGroups.data.name}
                                </span>
                              </div>
                              <div>
                                <span className="font-14 font-weight-bold">
                                  {item.value} {item.unity}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Divider />
                      {/*  */}
                      <div className="d-flex flex-column my-2">
                        <span className="font-14 Sans_Regular">
                          {intl.messages.product_info.comment}
                        </span>
                        <p className="font-14 mt-2 text-jumbatron Sans_Regular">
                          {props.product.data.description}
                        </p>
                      </div>
                      {/*  */}
                      <Divider />
                      <div className="">
                        <div className="d-flex justify-content-between mt-3">
                          <div className=" ">
                            <span className="font-14 Sans_Regular">
                              {intl.messages.lot.lot_id}
                            </span>
                          </div>
                          <div className=" ">
                            <span className="font-14 font-weight-bold">
                              {props.product.data.id}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <div className=" ">
                            <span className="font-14 Sans_Regular">
                              {intl.messages.lot.start_price}
                            </span>
                          </div>
                          <div className=" ">
                            <span className="font-14 font-weight-bold">
                              {intl.formatNumber(props.product.data.start_price)}
                              <span className="ml-1"></span>
                              {props.product.data.currency}
                            </span>
                          </div>
                        </div>
                        {props.product.data.highest_suggestion ? (
                          <div className="d-flex justify-content-between mt-3">
                            <div className=" ">
                              <span className="font-14 Sans_Regular">
                                {intl.messages.product_info.this_step}
                              </span>
                            </div>
                            <div className=" ">
                              <span className="font-14 font-weight-bold">
                                {intl.formatNumber(
                                  props.product.data.highest_suggestion
                                )}
                                <span className="ml-1"></span>
                                {props.product.data.currency}
                              </span>
                            </div>
                          </div>
                        ) : null}
                        {props.product.data.buy_now_price && !props.product.data.live ? (
                          <div className="d-flex justify-content-between mt-3">
                            <div>
                              <span className="font-14 Sans_Regular">
                                {intl.messages.lot.buy_now_price}
                              </span>
                            </div>
                            <div>
                              <span className="font-14 font-weight-bold">
                                {intl.formatNumber(
                                  props.product.data.buy_now_price
                                )}
                                <span className="ml-1"></span>
                                {props.product.data.currency}
                              </span>
                            </div>
                          </div>
                        ) : null}
                        <div className="d-flex justify-content-between mt-3">
                          <div className=" ">
                            <span className="font-14 Sans_Regular">
                              {intl.messages.add_item.step_two_minimum_step}
                            </span>
                          </div>
                          <div className=" ">
                            <span className="font-14 font-weight-bold">
                              {intl.formatNumber(
                                props.product.data.min_bid_price
                              )}
                              <span className="ml-1"></span>
                              {props.product.data.currency}
                            </span>
                          </div>
                        </div>
                        {!user.data ||
                          props.product.data.live === false ? (
                            <div>
                              <div className="my-2">
                                {!user.data ? (
                                  <span>
                                    {intl.messages.product_info.created_user_id}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          ) : (
                            <div>
                            </div>
                          )}


                        {user.data && props.product.data.live === true && user.data.id !== props.product.data.created_user_id && props.product.data.highest_suggestion ?
                          <div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <span className="font-14 Sans_Bold">
                                {intl.messages.product_info.your_move}
                              </span>
                              <span className="ml-3">
                                <div className="form-group mr-0">
                                  <input
                                    name="price"
                                    min={intl.formatNumber(
                                      props.product.data.min_bid_price
                                    )}
                                    placeholder={intl.formatNumber(
                                      props.product.data.min_bid_price
                                    )}
                                    value={formatNumberWithCharacter(state.price)}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                </div>
                              </span>
                            </div>
                            <div className="d-flex flex-column text-right">
                              <span className="text-danger mt-1">
                                {error ? error.data.errors.price : null}
                              </span>
                              <span className="text-danger mt-1">
                                {success.status === 'Error'
                                  ? success.message
                                  : null}
                              </span>
                              <span className="text-success mt-1">
                                {success.status === 'Success'
                                  ? success.message
                                  : null}
                              </span>
                            </div>
                          </div> : null
                        }
                        <div className='set_request'>
                          {success.status === 'Success' ? success.message : null}
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                          {!user.data ||
                            props.product.data.live === true ? null : (
                              <button
                                className={
                                  disableButton ? 'add-default' : 'favorites-button'
                                }
                                onClick={() => handleClick(productId)}
                              >
                                <span className="">
                                  {intl.messages.favorites.favorites_subtitle}
                                </span>
                              </button>
                            )}
                          {user.data && props.product.data.live === true && props.product.data.highest_suggestion && user.data.id !== props.product.data.created_user_id ?
                            <button
                              className="bid-button"
                              onClick={onClickBid}
                            >
                              <span className="">
                                {intl.messages.product_info.take_step}
                              </span>
                            </button> : null
                          }
                          {user.data && props.product.data.live === true && !props.product.data.highest_suggestion && user.data.id !== props.product.data.created_user_id ?
                            <button
                              className="bid-button"
                              onClick={firstBid}
                            >
                              <span className="">
                                {intl.messages.lot.start_price}
                              </span>
                            </button> : null
                          }

                          {user.data ||
                            props.product.data.buy_now_price ? (
                              <>
                                {props.product.data.live === false && user.data.id !== props.product.data.created_user_id && props.product.data.buy_now_price ? (
                                  <BuyNowModal props={props.product} />
                                ) : null}
                              </>
                            ) : null}
                        </div>
                      </div>
                      <Divider />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-4 card">
                <h3 className="font-18 text-left Sans_Bold">
                  {intl.messages.product_info.payment_option}
                </h3>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <p className="font-14 Sans_Regular">
                      {intl.messages.product_info.payment_info}
                    </p>
                  </div>
                </div>
              </div>
              {success ? (
                <div>
                  <ModalPopup text={intl.messages.thank_you} />
                </div>
              ) : null}
            </div>
          </div>
        )}
    </React.Fragment>
  );
}

export default ProductPage