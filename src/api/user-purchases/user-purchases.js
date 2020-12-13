import { axiosAuthInstance } from "../auth.config";

export const getUserLivePurchasesProduct_req = async () => {
  const response = await axiosAuthInstance().get(
    `/products/my-purchases?type=live`
  );
  return response.data;
};
export const getUserFinishedPurchasesProduct_req = async () => {
  const response = await axiosAuthInstance().get(
    `/products/my-purchases?type=finished`
  );
  return response.data;
};
