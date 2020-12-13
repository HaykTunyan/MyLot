import { axiosInstance } from "../config";

export const categorySlug_req = async (slug) => {
  const response = await axiosInstance.get(`/categories/${slug}`);
  return response.data;
};
