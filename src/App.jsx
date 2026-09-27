import { useEffect, useState } from "react";
import Books from "./pages/Books";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import NewBook from "./pages/NewBook";
import useLocalStorage from "./hooks/useLocalStorage";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  const [books, setBooks] = useState([]);
  const [newBooks] = useLocalStorage("newBooks", []);
  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks([...data,...newBooks]));
  }, [newBooks]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about" element={<About  />} />
          <Route path="/" element={<Home  />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookDetails books={books} />} />
          <Route path="/newBook/" element={<NewBook />} />
           
        </Route>
      </Routes>
    </>
  );
}

export default App;
