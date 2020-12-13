import { axiosInstance } from "../config";

export const categoryFilterProduct_req = async (slug, state) => {
  // const data = {
  //     a: 1,
  //     b: 2,
  //     c: 3
  // }
  const response = await axiosInstance.get(`/categories/${slug}`, {
    params: state,
  });
  return response.data;
};
