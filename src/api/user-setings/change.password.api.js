import { axiosAuthInstance } from "../auth.config";

export const changePassword_req = async (
  oldPassword,
  newPassword,
  confirmationPassword
) => {
  const response = await axiosAuthInstance().post(
    `auth/me/change-password?old_password=${oldPassword}&password=${newPassword}&password_confirmation=${confirmationPassword}`
  );
  return response.data;
};
