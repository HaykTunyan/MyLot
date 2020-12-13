import * as axios from "axios";
import { axiosAuthInstance } from "./auth.config";

const instance = axios.create({
  baseURL: "https://mylot.am/api/products",
});

const globalProject = axios.create({
  baseURL: "https://dev.mylot.am/api/"
})

const instanceProject = axios.create({
  baseURL: "https://mylot.am/api/",
});

const token = localStorage.token;
const verify = localStorage.verify;

export const CategoryAPI = {
  getCategoryItems() {
    return instanceProject.get("/categories").then((response) => {
      return response.data;
    });
  },
};

export const SuggestItemAPI = {
  getSuggestItems() {
    return instanceProject.get("/suggest-items").then((respons) => {
      return respons.data;
    });
  },
};

export const authApi = {
  me(token) {
    return instanceProject.get(`auth/me`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  login(login, password = false) {
    return instanceProject.post(`auth/login`, {
      login,
      password,
    });
  },
  logout(token) {
    return instanceProject.delete({
      token,
    });
  },
  verify(token) {
    localStorage.setItem("verify", token);
    return instanceProject.post(`auth/verify/${token}`);
  },
  resetPassword(token) {
    localStorage.setItem("reset", token);
    return instanceProject.post(`auth/reset-password/${token}`);
  },
  verifyMe(verify) {
    return instanceProject.get(`auth/me`, {
      headers: {
        Authorization: "Bearer " + verify,
      },
    });
  },
};

export const UserProfileAPI = {
  profile(name, surname) {
    return instanceProject.post("auth/update/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
      name,
      surname,
    });
  },
  changePhone(changePhone) {
    return instanceProject.post("auth/update/phone", {
      headers: {
        Authorization: "Bearer " + token,
      },
      changePhone,
    });
  },
  changePhone(changeEmail) {
    return instanceProject.post("auth/update/email", {
      headers: {
        Authorization: "Bearer " + token,
      },
      changeEmail,
    });
  },
  changePassword(changePassword) {
    return instanceProject.post("auth/update/password", {
      headers: {
        Authorization: "Bearer" + token,
      },
      changePassword,
    });
  },
  contactUs(email, subject, message) {
    return instanceProject.post("contact-us", {
      email,
      subject,
      message,
    });
  },
};

export const AddProductAPI = {
  filterGroup(id) {
    return instanceProject
      .get(`/filter-group/category/${id}`)
      .then((response) => {
        return response.data;
      });
  },
  addProduct(payload) {
    const formData = new FormData();
    formData.append("images[]", [payload.images]);
    return axiosAuthInstance
      .post(
        `/products?title=${payload.title}
                                                     &description=${payload.description}
                                                     &status_of_product=${payload.statusProduct}
                                                     &start_price=${payload.startPrice}
                                                     &auction_type=${payload.auctionType}
                                                     &start_date=2020-07-24 22:00:00
                                                     &end_date=2020-07-25 21:00:00
                                                     &category=${payload.category}
                                                     &region_id=${payload.region_id}
                                                     &city_id=1
                                                     &min_bid_price=${payload.minBidPrice}
                                                      `,
        formData
      )
      .then((response) => {
        return response.data;
      });
  },
};

export const ProductsAPI = {
  getUrgenthyProducts() {
    return instance.get("/upcoming_auctions?type=paginate").then((response) => {
      return response.data;
    });
  },
  getTopProducts() {
    return instance.get("/upcoming_auctions?type=paginate").then((response) => {
      return response.data;
    });
  },
  getUpcomingProducts() {
    return instance.get("/upcoming_auctions?type=paginate").then((response) => {
      return response.data;
    });
  },
  getLiveProducts() {
    return instance.get("/live_auctions?type=paginate").then((response) => {
      return response.data;
    });
  },
  getLastProducts() {
    return instance.get("/last_chanse?type=paginate").then((response) => {
      return response.data;
    });
  },
  getProductPage(productId) {
    return instance.get(`/${productId}`).then((response) => {
      return response.data;
    });
  },
};

export const SearchAPI = {
  getSearch(search) {
    return instanceProject.get(`search?search=${search}`).then((response) => {
      return response.data;
    });
  },
};
