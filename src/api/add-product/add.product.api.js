import { axiosInstance } from "../config";
import { axiosAuthInstance } from "../auth.config";
import moment from "moment";

export const addProduct_req = async ({ images, ...state }) => {
  const numberPattern = /\d+/g;
  if (state.start_price) {
    const start_price = state.start_price.match(numberPattern).join("");
    state["start_price"] = start_price;
  }
  if (state.buy_now_price) {
    const buy_now_price = state.buy_now_price.match(numberPattern).join("");
    state["buy_now_price"] = buy_now_price;
  }
  if (state.start_date) {
    const start_date = moment(
      state.start_date,
      "MM-DD-YYYY HH:mm:ss",
      true
    ).format("YYYY-MM-DD HH:mm:ss");
    state["start_date"] = start_date;
  }
  if (state.end_date) {
    const end_date = moment(state.end_date, "MM-DD-YYYY HH:mm:ss", true).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    state["end_date"] = end_date;
  }
  const formData = new FormData();

  images.map(({ dataURL }) => {
    formData.append("images[]", dataURL);
  });
  const request = Object.keys(state).reduce((acc, key) => {
    if (state[key] || state[key] === 0 || state[key] === false) {
      acc[key] = state[key];
    }
    return acc;
  }, {});

  const response = await axiosAuthInstance().request({
    url: "/products",
    method: "post",
    params: request,
    data: formData,
  });
  return response.data;
};

export const addModalProduct_req = async (id) => {
  const response = await axiosInstance.post(`/filter/child?filter_id=${id}`);
  return response.data;
};
