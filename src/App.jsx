import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import Books from "./pages/Books";
import Layout from "./layout"
import { Route,Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())

      .then((data) => setBooks(data));
  }, []);

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Books books={books}/>}/>
        <Route path="/books/:id" element={<BookDetails books={books}/>}/>
        
      </Route>
    </Routes>
    </>
  );
}

export default App;
