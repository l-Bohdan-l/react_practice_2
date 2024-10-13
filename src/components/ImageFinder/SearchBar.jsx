import { Field, Form, Formik } from "formik";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
export default function SearchBar({ onSubmit }) {
  const initialValues = {
    searchField: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.searchField.trim() !== "") {
      onSubmit(values.searchField);
      actions.resetForm();
    } else {
      toast.error("Input cant't be empty");
    }
  };

  const searchId = useId();
  return (
    <header className={css.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchField"
            id={searchId}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </header>
  );
}
