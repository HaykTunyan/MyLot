import { axiosInstance } from "../config";

export const getCategory_req = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};
