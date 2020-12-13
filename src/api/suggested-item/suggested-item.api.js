import { axiosAuthInstance } from "../auth.config";

export const suggestedItem_req = async (text) => {
  const response = await axiosAuthInstance().post(`suggest-items?text=${text}`);
  return response.data;
};
export const getSuggestedItem_req = async () => {
  const response = await axiosAuthInstance().get(`suggest-items`);
  return response.data;
};
