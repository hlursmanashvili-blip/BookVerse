import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
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
    </>
  );
}

export default App;
