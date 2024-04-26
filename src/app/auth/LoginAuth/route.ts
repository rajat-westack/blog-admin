import axios from "axios";

const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL;
/* export const LoginUser = async (value: any) => {
  const { email, password } = value;
  const payload = {
    email: email,
    password: password,
  };

  try {
    const user = await axios.post(`${BASE_URI}`, payload);
    const { data } = user;
    console.log(data.data.token);
    if (data.data.token) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
    }
    return;
  } catch (error) {
    console.log("first error: " + error);
  }
}; */

export const axiosInstance = axios.create({
  baseURL: BASE_URI,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response.data.data.token);
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("name", response.data.data.name);
    return response.data;
  },
  (error) => {
    alert("Invalid Credentials");
    return Promise.reject(error);
  }
);
