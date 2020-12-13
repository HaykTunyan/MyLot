import { axiosInstance } from "../config";

export const aboutUs_req = async () => {
  const response = await axiosInstance.get("/pages/about-us");
  return response.data;
};
