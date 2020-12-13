import React from "react";
import './favorites.scss';
import '../../reset.scss';
import { NavLink } from "react-router-dom";
// import Favorit from "../../assets/images/UserProduct/favorite_full.svg";
import DeleteModal from "../modal-popup/delete-modal/delete-modal";
import Preloader from "../preloader/preloader";
import { useIntl } from 'react-intl';
import UserProduct from "../../app-components/user-product/user-product";

const Favorites = ({ data }) => {

  const intl = useIntl();
  const deleteItem = data.data.map(item => item.id)
  console.log("deletItem", deleteItem)

  if (!data || !data.data) {
    return <Preloader />
  }

  return (
    <React.Fragment>
      <div className="user-favorites-product container">
        <nav class="nav py-4">
          <NavLink to="/home" className="text-dark mr-2">
            {intl.messages.main_page}
          </NavLink>
          <span>&gt;</span>
          <NavLink to="/favorites" className="active ml-2">
            {intl.messages.favorites.favorites_title}
          </NavLink>
        </nav>
        <div className="card my-5">
          <div className="card-body">
            <h2 className="text-center header_blues Monsterrat_Medium">
              {intl.messages.favorites.favorites_title}
            </h2>
            <div className="user-favorites-block mt-5">
              {data.data.map(item =>
                <div className="user-favorites-list">
                  <div className="favorites-card">
                    <UserProduct
                      id={item.product.data.id}
                      currency={item.product.data.currency}
                      title={item.product.data.title}
                      startPrice={item.product.data.start_price}
                      bidPrice={item.product.data.buy_now_price}
                      image={item.product.data.firstProductImage.data}
                      endDate={item.product.data.end_date}
                    />
                    <div className="user-product-edit pb-3">
                      <div className="product-icons">
                        {/* <Link to={`favoritesContainer`}>
                          <img
                            src={require("../../assets/images/UserProduct/favorite_full.svg")}
                            alt="FAVORITE_FULL"
                            className=""
                          />
                        </Link> */}
                        <DeleteModal id={deleteItem} />
                      </div>
                      {item.bidPrice
                        ? (
                          <div className="bid-now">
                            <button type="button" className="btn Sans_Bold addBid" >
                              {intl.messages.bid_now}
                            </button>
                          </div>
                        ) : null}

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Favorites