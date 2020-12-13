import { axiosInstance } from '../config';

export const contactUs_req = async (email, subject, message) => {
  const response = await axiosInstance.post(`/contact-us`, {
    email,
    subject,
    message,
  });
  return response.data;
};
