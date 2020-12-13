import { axiosAuthInstance } from '../auth.config';

export const bidRequest_req = async (id, price, currency) => {
  const response = await axiosAuthInstance().post(
    `/bid_requests?product_id=${id}&price=${price}&currency=${currency}&type=${'next_bid'}&first_bid=${0}`
  );
  return response.data;
};

export const firstBid_req = async (id, price, currency) => {
  const response = await axiosAuthInstance().post(
    `/bid_requests?product_id=${id}&price=${price}&currency=${currency}&type=${'next_bid'}&first_bid=${1}`
  );
  return response.data;
};

export const buyNow_req = async (id, price, currency) => {
  console.log('idd', price);
  const response = await axiosAuthInstance().post(
    `/bid_requests?product_id=${id}&price=${price}&currency=${currency}&type=${'buy_now'}&first_bid=${0}`
  );
  return response.data;
};
