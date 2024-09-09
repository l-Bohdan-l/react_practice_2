import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    // e.preventDefault();
    addContact({
      id: Math.floor(Math.random() * 1000000), // Generate random id for each contact
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name is to short")
      .max(50, "Name is to long"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(2, "Number is to short")
      .max(20, "Number is to long"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.wrapper}>
        <label htmlFor={nameId}>Name:</label>
        <Field type="text" id={nameId} name="name" />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number:</label>
        <Field type="text" id={numberId} name="number" />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
