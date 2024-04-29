import { axiosInstance } from "../Interseptor/route";
const endponint = "/signin";
const LoginUser = (payload) => {
  return axiosInstance.post(endponint, payload);
};
const LogoutUser = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("token");
};

const ApiRequest = {
  LoginUser,
  LogoutUser,
};

export default ApiRequest;
