import { useParams } from "react-router-dom";
import "./BookDetails.css"
export default function BookDetails({ books }) {
  const { id } = useParams();
  console.log(books);

  const book = books.find((book) => book.id === Number(id));
  if (!book) {
    return <p>Book not found.</p>;
  }
  return (
    <main className="book-details">
      <img src={book.coverImage} alt={book.title} />
      <div className="book-details__description">
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      </div>
    </main>
  );
}
