import React from "react";
import './live-product.scss'
import '../../../reset.scss'
import Preloader from "../../preloader/preloader";
import UserProduct from "../../../app-components/user-product/user-product";
import { useIntl } from 'react-intl';
import DeleteModal from "../../../components/modal-popup/delete-modal/delete-modal";
import { useHistory, Link } from "react-router-dom";
import PaySuccessModal from "../../modal-popup/pay-success-modal/pay-success-modal";
import PayCancelModal from "../../modal-popup/pay-cancel-modal/pay-cancel-modal";

const LiveProduct = ({ data }) => {
  console.log("dataaaaaaaaaaaaaaaaaa", data)
  const intl = useIntl()

  let history = useHistory();

  function handleClick() {
    history.push(`/product-page/${data.id}`);
  }


  if (!data || !data.data) {
    return <Preloader />
  }

  return (
    <div className="user-product">
      <div className="container">
        <h3 className="text-center">
          {intl.messages.completed_lots}
        </h3>
        <div className="user-live-product">
          {data.data.map(item =>
            <div className="user-live-product-list">
              <div className="bid-product-card">
                <UserProduct
                  id={item.id}
                  currency={item.currency}
                  title={item.title}
                  startPrice={item.start_price}
                  image={item.firstProductImage.data}
                  endDate={item.end_date}
                  participators={item.participators}
                  live={item.live}
                />
                <div className="live-product-edit">
                  <div className="user-product-edit">
                    {/* <Link to={`/edititem/${data.id}`}>
                      <img
                        src={require("../../../assets/images/UserProduct/edit.svg")}
                        alt="EDIT"
                        className=""
                      />
                    </Link>

                    <DeleteModal id={item.id} /> */}
                  </div>
                </div>
                {console.log('item', item.finishedAuction)}
                <div>
                  {item.paid === true ?
                    <div>
                      {item.finishedAuction && item.finishedAuction.data.confirm_seller_user === '0' ?
                        <div>
                          <PaySuccessModal item={item} />
                          <PayCancelModal item={item} />
                        </div>
                        : null}
                      {item.finishedAuction && item.finishedAuction.data.confirm_seller_user === '1' ?
                        <div>
                          <p>hastatvac</p>
                        </div>
                        : null}
                      {item.finishedAuction && item.finishedAuction.data.confirm_seller_user === '2' ?
                        <div>
                          <p>chexarkvac</p>
                        </div>
                        : null}
                    </div> : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LiveProduct