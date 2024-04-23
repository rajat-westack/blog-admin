import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL;
export const LoginUser = async (value: any) => {
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
      Swal.fire({
        title: `${data.data.name} you are successfully logged in`,
        icon: "success",
      });
      localStorage.setItem("token", JSON.stringify(data.data.token));
      
    }
    return;
  } catch (error) {
    Swal.fire({
      title: `invalid credentials`,
      icon: "error",
    });
  }
};
