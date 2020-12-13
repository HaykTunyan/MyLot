import React, { useState } from "react";
import './bids-purchases.scss';
import '../../../reset.scss';
import UserProduct from "../../../app-components/user-product/user-product";
import { useIntl } from "react-intl";
import { useHistory, Link } from "react-router-dom";
import DeleteModal from "../../../components/modal-popup/delete-modal/delete-modal";
import { Config } from "../../../constants/config";
import StartStep from "../../modal-popup/start-step-modal/start-step-modal";
import { axiosAuthInstance } from "../../../api/auth.config";

const BidsPurchases = ({ data } ) => {

const [purchases , usePurchases] = useState()
const [disableButton, setDisableButton] = useState(false);
const productId = data.data.map(item => item.id);
const intl = useIntl();
let history = useHistory();

function handleClick() {
  history.push(`/product-page/` + `` );
    // history.push(`/liveView`)
}

const favoritesClick = (productId) => {
  axiosAuthInstance().post(`/wishes?product_id=${productId}`).then(response => {
    if (response.data) {
      setDisableButton(!disableButton)
      return alert(" Շնորհակալություն, այս լոտը ավելացվել է Ձեր նախընտրածների ցուցակում ")
      }
      return response.data
  })
}

if (!data || !data.data) {
    return null
}

  return (
    <div className="bids-product">
      <h3 className="text-center mt-3">
        {intl.messages.currents_lot}
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <div className="user-bids-product">
              {data.data.map(item =>
                <div className="user-bid-product-list py-4">
                  <div className="bid-product-card">
                    <UserProduct
                      props={data.data}
                      id={item.id}
                      currency={item.currency}
                      title={item.title}
                      startPrice={item.start_price}
                      image={item.firstProductImage.data}
                      endDate={item.end_date}
                      participators={item.participators}
                      live={item.live}
                    />
                    <div className="bid-product-edit">
                      {item.highest_suggestion
                        ? <div class="user-product-text">
                          <p className="">
                            {intl.messages.lot.highest_suggestion}
                          </p>
                          <span className="font-weight-bold">
                            {intl.formatNumber(item.highest_suggestion)}
                          </span>
                          <span className="font-weight-bold ml-1">
                            {/* {intl.messages.money} */}
                             {item.currency}
                          </span>
                        </div>
                        : null
                      }
                    </div>
                    <div className="bid-product-btn">
                      <div className="user-product-edit">
                          <button
                            className="product-icon"
                            onClick={() => favoritesClick(productId)}
                          >
                          <img
                            src={require("../../../assets/images/UserProduct/favorite_full.svg")}
                            alt="FVORITE_FULL"
                            className=""
                          />
                          </button>
                        {/* <DeleteModal id={item.id} /> */}
                      </div>
                      <div className="bid-now">
                        {/* <StartStep /> */}
                        <button type="button" className="btn Sans_Bold addBid ml-2" onClick={handleClick}>
                          {intl.messages.product_info.take_step}
                        </button>
                        {/* {!user.data || user.data.id === props.product.data.created_user_id
                          ? null
                          : <button
                            className="bid-button"
                            onClick={onClickBid}
                          >
                            <span className="">
                              {intl.messages.product_info.take_step}
                            </span>
                          </button>
                        }
                        {!user.data ||
                          user.data.id === props.product.data.created_user_id ||
                          productBuyNow.data.buy_now_price === null ||
                          props.product.data.auction_type !== 'standard'
                          ? null
                          : <BuyNowModal props={props.product} />
                        } */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BidsPurchases