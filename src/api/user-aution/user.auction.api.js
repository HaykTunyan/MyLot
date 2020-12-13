import { axiosAuthInstance } from "../auth.config";

export const getUserLiveAuction_req = async (id) => {
  const response = await axiosAuthInstance().get(
    `/products/my-auctions?type=finished`
  );
  return response.data;
};
export const getUserAwaitingAuction_req = async (id) => {
  const response = await axiosAuthInstance().get(
    `/products/my-auctions?type=awaiting`
  );
  return response.data;
};
