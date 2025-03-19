import { Formik, Form, Field } from 'formik';

export default function SearchBar({ onSearch }) {
  const initialValues = {
    query: '',
  };

  const handleSubmit = (values, actions) => {
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="query" placeholder="Search images and photos" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
