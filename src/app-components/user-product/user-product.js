import React from "react";
import { Link } from "react-router-dom";
import "./user-product.scss";
import "../../reset.scss";
import { useIntl } from "react-intl";
import { Config } from "../../constants/config";
// import DeleteModal from "../../components/modal-popup/delete-modal/delete-modal";
// import { useHistory } from "react-router-dom";

const UserProduct = (props) => {

  const intl = useIntl();
  // let history = useHistory();

  // function handleClick() {
  //   history.push(`/product-page/${props.id}`);
  // }

  return (
    <div className="user-product">
      <Link to={`/product-page/${props.id}`}>
        <div className="user-product-img">
          <img
            src={
              Config.ImageUrl +
              props.image.cover +
              "_mediumOne." +
              props.image.ext
            }
            alt={props.image.cover}
          />
        </div>
      </Link>
      <div className="user-product-content">
        <h4 className="">
          {props.title}
        </h4>
        <div className="user-product-text">
          <p className="">
            {intl.messages.product_info.lot_id_name}
          </p>
          <span className="">
            {props.id}
          </span>
        </div>
        <div className="user-product-text">
          <p className="">
            {intl.messages.add_item.step_two_start_step}
          </p>
          <span className="">
            {intl.formatNumber(props.startPrice)} {props.currency}
          </span>
        </div>
        {/*  */}
        {props.min_bid_price
          ? <div className="user-product-text">
              <span className="">
                {intl.messages.add_item.step_two_minimum_step}
              </span>
              <span className="font-weight-bold">
                {intl.formatNumber(props.min_bid_price)}
              </span>
              <span className="font-weight-bold">
                {intl.messages.money}
              </span>
          </div>
          : null
        }
        {props.start_price
          ? <div className="user-product-text">
            <span className="">
              {intl.messages.add_item.step_two_start_step}
            </span>
            <span className="font-weight-bold">
              {intl.formatNumber(props.start_price)}
            </span>
            <span className="font-weight-bold">
              {intl.messages.money}
            </span>
          </div>
          : null
        }
        {props.highest_suggestion
          ? <div class="user-product-text">
            <span className="">
              {intl.messages.lot.highest_suggestion}
            </span>
            <span className="font-weight-bold">
              {intl.formatNumber(props.highest_suggestion)}
            </span>
            <span className="font-weight-bold">
              {intl.messages.money}
            </span>
          </div>
          : null
        }
        {/*  */}
        {props.highest_suggestion ? (
          <div className="user-product-text">
            <p className="">
              {intl.messages.participants}
            </p>
            <span className="">
              {props.participators}
            </span>
          </div>
        ) : null}
        {/*  */}
        {props.participators ? (
          <div className="user-product-text">
            <p className="">
              {intl.messages.participants}
            </p>
            <span className="">
              {props.participators}
            </span>
          </div>
        ) : null}
        {/*  */}
        <div className="user-product-text">
          <p className="">
            {intl.messages.product_info.end_date_text}</p>
          <span className="">
            {props.endDate}
            </span>
        </div>
      </div>
    </div>
  );
};

export default UserProduct;
