import { axiosInstance } from "../LoginAuth/route";
const endponint = "/signin";
const LoginUser = (payload) => {
  return axiosInstance.post(endponint, payload);
};
const LogoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
};

const ApiRequest = {
  LoginUser,
  LogoutUser,
};

export default ApiRequest;
