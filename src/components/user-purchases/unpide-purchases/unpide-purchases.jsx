import React from "react";
import './unpide-purchases.scss';
import '../../../reset.scss'
import UserProduct from "../../../app-components/user-product/user-product";
import { useIntl } from 'react-intl';
import { useHistory, Link } from "react-router-dom";
import DeleteModal from "../../../components/modal-popup/delete-modal/delete-modal";

const UnpidePurchases = ({ data }) => {
  console.log("data", data)
  const intl = useIntl();
  let history = useHistory();

  function handleClick() {
    history.push(`/product-page/${data.data.id}`);
  }

  if (!data || !data.data) {
    return null
  }

  return (
    <div className="unpide-product">
      <h3 className="text-center"> {intl.messages.participating_lots.step_one} {intl.messages.lot.lot_id} </h3>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <div className="user-unpide-product">
              {data.data.map(item =>
                <div className="user-unpide-product-list">
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
                    <div className="bid-product-edit">
                      <div className="user-product-edit">
                        <Link to={`favoritesContainer`}>
                          <img
                            src={require("../../../assets/images/UserProduct/favorite_full.svg")}
                            alt="EDIT"
                            className=""
                          />
                        </Link>
                        <DeleteModal id={item.id} />
                      </div>
                      <div className="bid-now">
                        <button type="button" className="btn Sans_Bold addBid" onClick={handleClick}>
                          {intl.messages.bid_now}
                        </button>
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

export default UnpidePurchases