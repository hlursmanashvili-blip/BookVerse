import { useEffect, useState } from "react";
// import BookCard from "./components/BookCard";
import Books from "./pages/Books";
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())

      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <Books books={books} />
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            coverImage={book.coverImage}
          />
        ))}
      </div> */}
    </>
  );
}

export default App;
