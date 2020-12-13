import React, { useEffect, useState } from "react";
import '../user-purchases.scss';
import './pide-purchases.scss';
import DeleteModal from "../../modal-popup/delete-modal/delete-modal";
import Chrono from "../../../assets/images/UserProduct/Chrono-S.png";
import { payment_reqFinished, paymentFinishCancelTakeLotHastatel_req, paymentFinishCancelGiveLotChexarkel_req } from "../../../api/payment/payment.api";
import { getLastProducts_req } from "../../../api/product/product.api";
import { resetPassword_req } from "../../../api/user-login/user.login.api";
import { useIntl } from 'react-intl';
import { useHistory, Redirect } from "react-router-dom";
import { Config } from "../../../constants/config";
import PayCancelModal from "../../modal-popup/pay-cancel-modal/pay-cancel-modal";
import PaySuccessModal from "../../modal-popup/pay-success-modal/pay-success-modal";


const PidePurchases = ({ data }) => {
  console.log("gggggggggggggg00", data)
  const [payment, setPayment] = useState('');
  const history = useHistory();
  const intl = useIntl();
  const paymentRequest = (bidRequestId, id, price) => {
    const paymentReq = async () => {
      try {
        const payment = await payment_reqFinished(bidRequestId, id, price)
        if (payment.url) {
          const url = payment.url
          window.location.assign(`${url}`);
        }
        setPayment(payment)
      } catch (e) {
      }
    }
    paymentReq()
  };
  const hastatvac = (id) => {
    const hastatel = async () => {
      try {
        const payment = await paymentFinishCancelTakeLotHastatel_req(id)

      } catch (e) {
      }
    }
    hastatel()
  }
  const chexarkvac = (id) => {
    const chexarkel = async () => {
      try {
        const payment = await paymentFinishCancelGiveLotChexarkel_req(id)
      } catch (e) {
      }
    }
    chexarkel()
  }
  return (
    <div className="awaiting-product pt-5">
      <h3 className="text-center">{intl.messages.completed_lots}</h3>
      <div className="container">
        <div className="my-4 row">
          <div className="col-12 col-sm-12 col-lg-12">
            <div className="row">
              {data.data.map((item) => (
                <div className="col-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 mt-3">
                  <div className="p-lg-3 cardProduct h-100">
                    <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                      <div className="d-flex purchases_img border">
                        <img
                          src={
                            Config.ImageUrl +
                            item.firstProductImage.data.cover +
                            '_mediumOne.' +
                            item.firstProductImage.data.ext
                          }
                          alt="CHRONO_S"
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="d-flex flex-column purchases_content p-2 Monsterrat_Medium">
                        <h4 className="text-left font-16 Monsterrat_Medium mt-md-0 ml-md-2">
                          {item.title}
                        </h4>
                        <div className="mt-md-0 ml-md-2">
                          {item.id ? (
                            <div class="font-14 d-flex justify-content-between">
                              <p className="">
                                {intl.messages.product_info.lot_id_name}
                              </p>
                              <p className="">
                                <span className="font-weight-bold ">
                                  {intl.formatNumber(item.id)}
                                </span>
                              </p>
                            </div>
                          ) : null}
                          {item.start_price ? (
                            <div className="font-14 d-flex justify-content-between">
                              <p className="">
                                {intl.messages.add_item.step_two_start_step}
                              </p>
                              <p className="">
                                <span className="font-weight-bold">
                                  {intl.formatNumber(item.start_price)}
                                </span>
                                <span className="font-weight-bold ml-1">
                                  {intl.messages.money}
                                </span>
                              </p>
                            </div>
                          ) : null}
                          {/*  */}
                          {item.highest_suggestion ? (
                            <div class="font-14 d-flex justify-content-between">
                              <p className="">
                                {intl.messages.lot.highest_suggestion}
                              </p>
                              <p className="">
                                <span className="font-weight-bold">
                                  {intl.formatNumber(item.highest_suggestion)}
                                </span>
                                <span className="font-weight-bold ml-1">
                                  {intl.messages.money}
                                </span>
                              </p>
                            </div>
                          ) : null}
                          {/*  */}
                          {item.participators ? (
                            <div class="font-14 d-flex justify-content-between">
                              <p className="">{intl.messages.participants}</p>
                              <span className="font-weight-bold">
                                {item.participators}
                              </span>
                            </div>
                          ) : null}
                          {/*  */}
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="d-flex justify-content-end">
                      {/*  */}
                      {item.finishedAuction.data.winner == true ? (
                        <div>
                          {item.paid == false ? (
                            <div className="d-flex justify-content-end p-2">
                              <button
                                onClick={() =>
                                  paymentRequest(
                                    item.finishedAuction.data.bid_request_id,
                                    item.finishedAuction.data.id,
                                    item.finishedAuction.data.price
                                  )
                                }
                                className="button-payment"
                              >
                                {intl.messages.pay}
                              </button>
                            </div>
                          ) : (
                              <div className=" purchases_content p-2 Monsterrat_Medium">
                                {item.finishedAuction && item.finishedAuction.data.confirm_won_user === '0' ?
                                  <div className="d-flex ">
                                    <div onClick={() => hastatvac(item.finishedAuction.data.id)}>
                                      <PaySuccessModal /> 
                                    </div>
                                    <div onClick={() => chexarkvac(item.finishedAuction.data.id)}>
                                      <PayCancelModal />
                                    </div>
                                  </div>
                                  : null}
                                {item.finishedAuction && item.finishedAuction.data.confirm_won_user === '1' ?
                                  <div className="d-flex jsutify-content-end">
                                    <p className="header_blue"> {intl.messages.pay_success_title} </p>
                                  </div>
                                  : null}
                                {item.finishedAuction && item.finishedAuction.data.confirm_won_user === '2' ?
                                  <div className="d-flex jsutify-content-end">
                                    <p className="time-danger">{intl.messages.pay_cancel_title}</p>
                                  </div>
                                  : null}
                              </div>
                            )}
                        </div>
                      ) : null}

                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center">
              {payment.status === 'Error' ? (
                <div className="text-center">{payment.message}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PidePurchases