import { axiosInstance } from "../config";

export const register_req = async (
  name,
  surname,
  email,
  phone,
  login,
  password,
  password_confirmation,
  agree_to_the_terms_of_the_site
) => {
  const response = await axiosInstance.post("/auth/register", {
    name,
    surname,
    email,
    phone,
    login,
    password,
    password_confirmation,
    agree_to_the_terms_of_the_site,
  });
  return response.data;
};
