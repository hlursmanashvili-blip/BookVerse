import { Link } from "react-router-dom";
import "./Index.css";
import "./Navbar.css";
import { useSelector } from "react-redux";
import {Heart} from  "lucide-react";




export default function Navbar() {
  const count = useSelector((state) => state.favorites.books.length);
  const hasFavorites = count > 0;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1><Link to="/">Book Verse</Link> </h1>
      </div>
      <div className="pages">
        <Link to="/books">Books</Link>
        <Link to="../about">About us</Link>
        <Link to="/">Home</Link>
      </div>
      <div className="buttons">
      <button className="fav-btn">
        <Heart className={`heart ${hasFavorites ? "active" : ""}`}
        size={25}
        
      /> 
      {count}
      </button>
      
        <Link className="new-book" to="/newBook">Add new book</Link>
      
      </div>
    </nav>
  );
}
