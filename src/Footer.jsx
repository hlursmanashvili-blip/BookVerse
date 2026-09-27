import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>BookVerse</h2>
          <p>
            Discover stories, explore new worlds,
            <br />
            and find your next favorite book.
          </p>

          <Link to="/books" className="footer-explore">
            Explore the library →
          </Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>Library</h3>
          <Link to="/newBook">Add a book</Link>
          <Link to="/books">Browse collection</Link>
        </div>

        <div className="footer-column">
          <h3>Created by</h3>
          <Link to="/me">About me</Link>
          <a href="h.lursmanashvili@gmail.com">Contact</a>
        </div>
      
      </div>

      <div className="footer-bottom">
        <p>© 2026 BookVerse</p>
      
      </div>
      
      
    </footer>
  );
}