import { axiosAuthInstance } from "../auth.config";

export const logOut_req = async (token) => {
  const response = await axiosAuthInstance().post("/auth/logout", {
    headers: {
      Authorization: "Bearer" + token,
    },
  });
  return response.data;
};
