import { axiosAuthInstance } from "../auth.config";

export const emailAddress_req = async (email) => {
  const response = await axiosAuthInstance().post(
    `auth/update/email?email=${email}`
  );
  return response.data;
};
