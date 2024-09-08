import { useId } from "react";
import { Field, Form, Formik } from "formik";
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

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.wrapper}>
        <label htmlFor={nameId}>Name:</label>
        <Field type="text" id={nameId} name="name" />
        <label htmlFor={numberId}>Number:</label>
        <Field type="text" id={numberId} name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
