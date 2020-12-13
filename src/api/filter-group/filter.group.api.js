import { axiosInstance } from "../config";

export const getFilter = async (id) => {
  const response = await axiosInstance.get(`/filter-group/category/${id}`);
  return response.data;
};
