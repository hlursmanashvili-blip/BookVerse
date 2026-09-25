import { addingSchema } from "../validationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./NewBook.css";
export default function NewBook() {
  return (
    <div>
      <h1 className="title">Add a new book</h1>
      <Formik
        initialValues={{
          title: "",
          author: "",
          genre: "",
          photo: "",
          description: "",
          year: "",
          rating: "",
        }}
        validationSchema={addingSchema}
        onSubmit={(validation) => {
          console.log(validation);
        }}
      >
        <Form className="book-form">
          <div className="form-part">
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="span" />
          </div>

          <div className="form-part">
            <label htmlFor="author" type="text" name="">
              Author
            </label>
            <Field type="text" name="author" placeholder="Author" />
            <ErrorMessage name="author" component="span" />
          </div>

          <div className="form-part">
            <label htmlFor="title" type="text" name="">
              Genre
            </label>
            <Field as="select" name="genre">
              <option value="">Select a genre</option>
              <option value="Classic">Classic</option>
              <option value="Fiction">Fiction</option>
              <option value="Dystopian">Dystopian</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
            </Field>
            <ErrorMessage name="genre" component="span" />
          </div>

          <div className="form-part">
            <label htmlFor="picture">Cover picture URL</label>
            <Field type="text" name="picture" placeholder="Cover picture URL" />
            <ErrorMessage name="picture" component="span" />
          </div>

          <div className="form-part">
            <label htmlFor="description">Description</label>
            <Field
              type="text"
              name="description"
              as="textarea"
              placeholder="Write a description..."
              rows="5"
            />
            <ErrorMessage name="description" component="span" />
          </div>

          <div className="form-part">
            <label htmlFor="year">Year</label>
            <Field
              type="number"
              name="year"
              min="1000"
              max={new Date().getFullYear()}
              step="1"
            />
            <ErrorMessage name="year" component="span" />
          </div>

          <div className="form-part">
            <label htmlFor="rating">Rating</label>
            <Field type="number" name="rating" min="0" max="10" step="1" />
            <ErrorMessage name="rating" component="span" />
          </div>
          <button className="submit-btn" type="submit">
            Add new book
          </button>
        </Form>
      </Formik>
    </div>
  );
}
