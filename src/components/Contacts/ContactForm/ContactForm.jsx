import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
export default function ContactForm() {
  return (
    <Formik>
      <Form className={css.wrapper}>
        <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" />
        <label htmlFor="number">Number:</label>
        <Field type="text" id="number" name="number" />
        <button type="button">Add contact</button>
      </Form>
    </Formik>
  );
}
