import PageHeader from "./PageHeader";
import Input from "./common/input";
import signUpBtn from "../icons/sign-up.png";
import { useFormik } from "formik";
import FormikWithJoi from "../utilities/formikWithJoi";
import Joi from "joi";
import { useState } from "react";
import { createUser } from "../services/useHttpServices";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const SignUpBiz = () => {
  const { user, login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const form = useFormik({
    validateOnMount: false,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: FormikWithJoi({
      name: Joi.string().min(2).max(20).required().label("Name"),
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
        await createUser({ ...values, biz: true });
        await login({ email: values.email, password: values.password });
        toast("Your an Admin Now!");
        navigate("/createCard");
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
      <PageHeader
        title="Sign Up Business"
        description="It's Free try it out!"
      />
      {error && <div className="alert alert-danger">{error}</div>}

      <form
        onSubmit={form.handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <Input
          {...form.getFieldProps("name")}
          label="Name"
          id="name"
          type="name"
          error={form.touched.name && form.errors.name}
        />
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
          <img src={signUpBtn} alt="Sign Up" height={100} width={100} />
        </button>
      </form>
    </>
  );
};
export default SignUpBiz;
