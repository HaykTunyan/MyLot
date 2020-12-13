import React from "react";
import './awaiting-product.scss';
import '../../../reset.scss';
import Preloader from "../../preloader/preloader";
import AwaitingProductPagination from "./awaiting-product-pagination/awaiting-product-pagination";
import { useIntl } from 'react-intl';
import UserProduct from "../../../app-components/user-product/user-product";
import { useHistory, Link } from "react-router-dom";
import DeleteModal from "../../../components/modal-popup/delete-modal/delete-modal";

const AwaitingProduct = ({ data }) => {

  // console.log("data", data)
  
  const intl = useIntl()
  const page = data.meta.pagination

  let history = useHistory();

  function handleClick() {
    history.push(`/liveView`);
  }

  if (!data || !data.data) {
    return (
      <React.Fragment>
        <Preloader />
      </React.Fragment>
    )
  }

  return (
    <div className="awaiting-product">
      <h3 className="text-center">
        {intl.messages.expected_lots}
      </h3>
      <div className="d-flex justify-content-between p-3 ">
        <div className="itemsFound">
          <p className=""> 
            {intl.messages.Lot_lenght} 
            {page.total} 
          </p>
        </div>
        <div className="page">
          <AwaitingProductPagination page={page} />
        </div>
      </div>
      <div className="container">
        <div className="user-awaiting-block">
          {data.data.map(item =>
            <div className="user-awaiting-list">
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
                <div className="awaiting-product-edit">
                  <div className="user-product-edit">
                    <Link to={`/edititem/${data.id}`}>
                      <img
                        src={require("../../../assets/images/UserProduct/edit.svg")}
                        alt="EDIT"
                        className=""
                      />
                    </Link>
                    <DeleteModal id={item.id} />
                  </div>        
                  <div className="bid-now">
                    <button type="button" className="btn Sans_Bold addBid" onClick={handleClick}>
                      {intl.messages.go_live}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AwaitingProduct