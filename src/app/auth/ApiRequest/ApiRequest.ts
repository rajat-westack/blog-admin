import { axiosInstance } from "../LoginAuth/route";
const endponint = "/signin";
export const LoginUser = (payload) => {
  return axiosInstance.post(endponint, payload);
};
      