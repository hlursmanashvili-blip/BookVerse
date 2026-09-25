import * as Yup from "yup";
export const addingSchema = Yup.object({
  title: Yup.string().required("Title is required").min(2, "Min two letter"),
  author: Yup.string().required("Author is required").min(2, "Min two letters"),
  genre: Yup.string()
    .required("Genre is required")
    .oneOf(
      ["Fantasy", "Fiction", "Classic", "Romance", "Dystopian"],
      "Please select a valid genre",
    ),
  picture: Yup.string().required("URL is required").url("Enter a valid URL"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  year: Yup.number()
    .required()
    .integer("Year must be a whole number")
    .min(1000, "Year must be 1000 or later")
    .max(new Date().getFullYear(), "Year cannot write future date"),
  rating: Yup.number()
    .required("rating is required")
    .min(0, "Rating cannot be less than 0")
    .max(10, "Rating cannot be more than 10"),
});
