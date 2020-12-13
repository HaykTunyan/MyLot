import { axiosInstance } from '../config';
import { axiosAuthInstance } from '../auth.config';

export const getLiveProducts_req = async () => {
  const response = await axiosInstance.get(
    '/products/live_auctions?type=paginate'
  );
  return response.data;
};
export const getLiveProductsGet_req = async () => {
  const response = await axiosInstance.get(
    '/products/live_auctions?type=paginate'
  );
  return response.data;
};
export const getUpcomingProducts_req = async () => {
  const response = await axiosInstance.get(
    'products/upcoming_auctions?type=paginate'
  );
  return response.data;
};
export const getUpcomingProductsGet_req = async () => {
  const response = await axiosInstance.get(
    'products/upcoming_auctions?type=paginate'
  );
  return response.data;
};
export const getLastProducts_req = async () => {
  const response = await axiosInstance.get(
    '/products/last_chanse?type=paginate'
  );
  return response.data;
};
export const getRegions_req = async () => {
  const respose = await axiosInstance.get('/regions');
  return respose.data;
};
export const getCity_req = async () => {
  const respose = await axiosInstance.get('/cities');
  return respose.data;
};
export const getProducts_req = async (id) => {
  const response = await axiosAuthInstance().get(`/products/${id}`);
  return response.data;
};
export const deleteProduct_req = async (id) => {
  const response = await axiosAuthInstance().delete(`/wishes/${id}`);
  return response.data;
};
