"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
      "Please enter a valid email  "
    )
    .min(6, "email must not less then 6 characters")
    .max(40)
    .required("Plesae Enter Email "),
  password: Yup.string()
    .min(3, "Password must not ne less then 3 characters")
    .required("Please enter a password"),
});
const Login = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const { handleBlur, handleSubmit, touched, handleChange, values, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,

      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        router.push("/");
      },
    });
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="flex justify-center my-24 container items-center">
      <form
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
        onSubmit={handleSubmit}
        className="w-[450px] h-[400px] container shadow-2xl  "
      >
        <CardHeader>
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Label className="text-xl font-bold">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 mb-4"
            placeholder="Enter your Email"
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}

          <Label className="txt-xl font-bold">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-2 text-blue-500 "
            placeholder="Enter your Password"
          />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button
            type="submit"
            className=" text-white bg-gradient-to-br w-full mt-10 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </Button>
        </CardFooter>
      </form>
    </div>
  );
};

export default Login;
