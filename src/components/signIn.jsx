import PageHeader from "./PageHeader";
import Input from "./common/input";
import signInBtn from "../icons/sign-in-button.png";
import { useState } from "react";
import { useFormik } from "formik";
import FormikWithJoi from "../utilities/formikWithJoi";
import Joi from "joi";
import { useAuth } from "../context/authContext";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignIn = () => {
  const { user, login: logInUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: FormikWithJoi({
      email: Joi.string()
        .min(3)
        .max(115)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string().min(2).max(10).required().label("Password"),
    }),
    async onSubmit(values) {
      try {
        await logInUser(values);
        toast("Hey There!")
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <PageHeader title="Sign In" description="Let's get this started!" />
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={form.handleSubmit} className="d-flex flex-column align-items-center">
        <Input
          {...form.getFieldProps("email")}
          label="Email"
          id="email"
          type="email"
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          label="Password"
          id="password"
          type="password"
          error={form.touched.password && form.errors.password}
        />
        <button className="btn" type="submit">
          <img src={signInBtn} alt="Sign In" height={100} width={100} />
        </button>
      </form>
    </>
  );
};
export default SignIn;
