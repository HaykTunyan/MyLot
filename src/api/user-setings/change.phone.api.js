import { axiosAuthInstance } from "../auth.config";

export const phoneNumber_req = async (phone) => {
  const response = await axiosAuthInstance().post(
    `auth/update/phone?phone=${phone}`
  );
  return response.data;
};
