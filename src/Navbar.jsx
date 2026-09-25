import { Link } from "react-router-dom";
import "./Index.css";
import "./Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.favorites.books.length);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1> Book Store</h1>
      </div>
      <div className="pages">
        <Link to="/books">Books</Link>
        <Link to="/books">About us</Link>
        <Link to="/books">Main</Link>
      </div>
      <button className="fav">Favourites {count}</button>
      <button className="new-book">
        <Link to="/newBook">Add new book</Link>
      </button>
    </nav>
  );
}
