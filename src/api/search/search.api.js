import { axiosInstance } from "../config";

export const search_req = async (search) => {
  const response = await axiosInstance.get(`/search?search=${search}`);
  return response.data;
};
