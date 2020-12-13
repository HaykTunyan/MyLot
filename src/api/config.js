import axios from 'axios';
import { getCookie } from '../helpers/cookie.helpers';
const baseURL = 'https://mylot.am/api';

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    language: getCookie('locale'),
  },
});

const successResponse = (response) => {
  return response;
};

const errorResponse = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(successResponse, errorResponse);
