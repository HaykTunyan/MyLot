import { axiosInstance } from '../config';
export const privacy_req = async () => {
  const response = await axiosInstance.get(`/pages/privacy-policy`);
  return response.data;
};
