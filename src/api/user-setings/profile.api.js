import { axiosAuthInstance } from "../auth.config";

export const profile_req = async (name, surname) => {
  const response = await axiosAuthInstance().post(
    `auth/update/profile?name=${name}&surname=${surname}`
  );
  return response.data;
};
