import * as axios from "axios";

export const userService = {
  register,
};

const instanceProject = axios.create({
  baseURL: "http://admin.mylot.am/api/",
});

function register(user) {
  const name = user.name;
  const surname = user.surname;
  const login = user.login;
  const email = user.email;
  const phone = user.phone;
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  return instanceProject
    .post(`auth/register`, {
      name,
      surname,
      login,
      email,
      phone,
      password,
      password_confirmation,
    })
    .then(handleResponse);
}

function handleResponse(response) {
  if (response.status === 200) {
  }
  const error = (response && response.message) || response.statusText;
  return Promise.reject(error);
  return response;
}
