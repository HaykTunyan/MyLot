import { axiosInstance } from "../config";

export const login_req = async (login, password) => {
  const response = await axiosInstance.post("/auth/login", {
    login,
    password,
  });
  return response.data;
};
export const auth_me_req = async (token) => {
  const response = await axiosInstance.get(`auth/me`, {
    headers: {
      Authorization: "Bearer" + token,
    },
  });
  return response.data;
};
export const forgotPassword_req = async (email) => {
  const response = await axiosInstance.post(
    `auth/reset-password?email=${email}`
  );
  return response.data;
};
export const resetPassword_req = async (
  changeToken,
  password,
  passwordConfirmation
) => {
  const response = await axiosInstance.post(
    `auth/change-password/${changeToken}?password=${password}&&password_confirmation=${passwordConfirmation}`
  );
  return response.data;
};
