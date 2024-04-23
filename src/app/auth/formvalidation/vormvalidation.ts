import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
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
