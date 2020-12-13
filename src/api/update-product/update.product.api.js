import { axiosAuthInstance } from "../auth.config";

export const updateProduct_req = async (id, { images, ...state }) => {
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
    url: `/products/${id}`,
    method: "post",
    params: request,
    data: formData,
  });
  return response.data;
};
