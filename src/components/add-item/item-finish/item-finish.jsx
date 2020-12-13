import React, { useState, useEffect } from 'react';
import '../additem.scss';
import { Link, useParams } from 'react-router-dom';
import { getProducts_req } from '../../../api/product/product.api';
import { Config } from '../../../constants/config';
import { useIntl } from 'react-intl';

const ItemFinish = () => {
  const [state, setState] = useState([]);
  const intl = useIntl();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const getProductList = await getProducts_req(id);
        setState(getProductList);
      } catch (e) {
        console.log(e.response);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <div className="mt-5">
          <h3 className="font-18 Sans_Bold">
            {intl.messages.add_item.your_lot_will}
          </h3>
          <div>
            {state && state.product && state.product.data && (
              <img
                src={
                  Config.ImageUrl +
                  state.product.data.media.data[0].cover +
                  '_mediumOne.' +
                  state.product.data.media.data[0].ext
                }
                alt={state.product.data.media.data[0].cover}
                className="w-100 item_img"
              />
            )}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="mt-5">
          <div className="d-flex flex-column">
            {state && state.product && (
              <div>
                <p className="font-18 mt-4 Sans_Bold">
                  <div>{state.product.data.title}</div>
                </p>
                <p className="font-18 Sans_Bold">
                  {intl.formatNumber(state.product.data.start_price)}
                  {intl.messages.money}
                </p>
              </div>
            )}
            <div className="mt-5">
              <div className="my-1">
                <Link
                  to="/userAuction"
                  className="btn text-white Sans_Bold finshBtn"
                >
                  {intl.messages.my_lot}
                </Link>
              </div>
              <div className="my-1">
                <Link
                  to="/addItem"
                  className="btn text-white mt-2 Sans_Bold finshBtn"
                >
                  {intl.messages.add_lot}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFinish;
