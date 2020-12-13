import axios from "axios";

import { getCookie } from "../helpers/cookie.helpers";
const baseURL = "https://mylot.am/api";

export const axiosAuthInstance = () => {
  console.log("aaaaa", getCookie("locale"));
  // TODO : read token from store
  const token = localStorage.token;

  const service = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
      language: getCookie("locale"),
    },
  });

  return service;
};

// export const axiosAuthInstance = axios.create({
// 	baseURL: baseURL,
//     timeout: 60000,
//     headers: {
//         Authorization: 'Bearer ' + localStorage.token,
//         'Content-Type':'multipart/form-data'
//      }
// });

// const successResponse = (response) => {
// 	return response;
// };

// const errorResponse = (error) => {
// 	return Promise.reject(error);
// };

// axiosAuthInstance.interceptors.response.use(successResponse, errorResponse);
