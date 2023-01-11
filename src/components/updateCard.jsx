import { useFormik } from "formik";
import FormikWithJoi from "../utilities/formikWithJoi";
import Input from "./common/input";
import PageHeader from "./PageHeader";
import Joi from "joi";
import { updateCard } from "../services/cardServices";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import idCard from "../icons/id-card.png";
import UseCard from "../hooks/useCard";
import { toast } from "react-toastify";

const UpdateCard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const card = UseCard(id);
  const form = useFormik({
    validateOnMount: false,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: FormikWithJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone Number"),
      bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
    }),
    async onSubmit(values) {
      const { bizImage, ...body } = values;
      if (bizImage) {
        body.bizImage = bizImage;
      }
      try {
        await updateCard(id, body);
        toast("Fixed!");
        navigate("/myCards");
      } catch ({ response }) {
        if (response && response.status >= 400) {
          setError(response.data);
        }
      }
    },
  });
  useEffect(() => {
    if (!card) {
      return;
    }
    const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;
    form.setValues({
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    });
  }, [card]);
  return (
    <>
      <PageHeader title="Edit Your Card" />
      {error && <div className="alert alert-danger">{error}</div>}

      <form
        onSubmit={form.handleSubmit}
        className="w-auto d-flex flex-column align-items-center justify-items-center"
      >
        {" "}
        <Input
          {...form.getFieldProps("bizName")}
          label="Name"
          id="name"
          type="name"
          error={form.touched.bizName && form.errors.bizName}
        />
        <Input
          {...form.getFieldProps("bizDescription")}
          label="Description"
          id="description"
          type="text"
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          {...form.getFieldProps("bizAddress")}
          label="Address"
          id="address"
          type="text"
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        <Input
          {...form.getFieldProps("bizPhone")}
          label="Phone Number"
          id="phone"
          type="tel"
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          {...form.getFieldProps("bizImage")}
          label="Image"
          id="image"
          type="text"
          error={form.touched.bizImage && form.errors.bizImage}
        />
        <button type="submit">
          <img src={idCard} height={80} width={80} alt="Create Card" />
        </button>
      </form>
    </>
  );
};

export default UpdateCard;
