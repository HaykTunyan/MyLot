import { axiosAuthInstance } from '../auth.config';

export const payment_req = async (finishedId, bidId, price, type) => {
  console.log('finished', price);
  const response = await axiosAuthInstance().post(
    `products/payment/register?finished_auction_id=${finishedId}&price=${price}&currency=AMD&bid_request_id=${bidId}&type=${type}`
  );
  return response.data;
};
export const payment_reqFinished = async (bidId, finishedId, price) => {
  const response = await axiosAuthInstance().post(
    `products/payment/register?finished_auction_id=${finishedId}&price=${price}&currency=AMD&bid_request_id=${bidId}&type=${'next_bid'}`
  );
  return response.data;
};
export const paymentFinish_req = async (id) => {
  const response = await axiosAuthInstance().get(
    `payment/getOrderStatusExtended?orderId=${id}`
  );
  return response.data;
};
export const paymentFinishConfirm_req = async (id) => {
  const response = await axiosAuthInstance().post(
    `payment/getOrderStatusExtended?orderId=${id}&type=${1}`
  );
  return response.data;
};

export const paymentFinishCancelTakeLot_req = async (id) => {
  const response = await axiosAuthInstance().post(
    `/finished-auctions/give-lot?id=${id}&confirm=${1}`
  );
  return response.data;
};
export const paymentFinishCancelGiveLot_req = async (id) => {
  const response = await axiosAuthInstance().post(
    `/finished-auctions/give-lot?id=${id}&confirm=${2}&new=${1}`
  );
  return response.data;
};

export const paymentFinishCancelGiveLotCardNumber_req = async (
  id,
  name,
  surname,
  cardNumber,
  always
) => {
  const response = await axiosAuthInstance().post(
    `/finished-auctions/give-lot?id=${id}&confirm=${1}&new=${1}&name=${name}&surname=${surname}&credit_card=${cardNumber}&type=${1}&always=${1}`
  );
  return response.data;
};

export const paymentFinishCancelTakeLotHastatel_req = async (id) => {
  const response = await axiosAuthInstance().post(
    `/finished-auctions/take-lot?id=${id}&confirm=${1}`
  );
  return response.data;
};

export const paymentFinishCancelGiveLotChexarkel_req = async (id) => {
  const response = await axiosAuthInstance().post(
    `/finished-auctions/take-lot?id=${id}&confirm=${2}`
  );
  return response.data;
};
