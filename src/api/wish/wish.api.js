import { axiosAuthInstance } from "../auth.config";

export const getWishesList_req = async () => {
  const response = await axiosAuthInstance().get("/wishes");
  return response.data;
};
