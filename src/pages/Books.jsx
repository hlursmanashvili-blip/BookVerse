import { useMemo, useState } from "react";
import BookCard from "../components/BookCard";
import "../Index.css";
import "./Books.css";

export default function Books({ books }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const findBook = useMemo(() => {
    const searchText = search.toLowerCase();

    if (genre === "" || genre === "All") {
      return books;
    }

    return books.filter((book) => {
      return (
        (book.title.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText)) &&
        (book.genre === genre || book.genre === "All")
      );
    });
  }, [books, search, genre]);

  return (
  
    <section className="books">
      <div className="filters"> 
      <input
        className="search"
        type="text"
        placeholder="Search by author or title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
         <select className="genre-select" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} >
          <option value="" disabled>Select a genre</option>
          <option value="All">All</option> 
          <option value="Classic">Classic</option> 
          <option value="Dystopian">Dystopian</option>
           <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
             <option value="Fiction">Fiction</option>
             <option value="Historical fiction">Historical fiction</option> 
             <option value="Sci-Fi">Sci-Fi</option>
             <option value="Post-Apocalyptic">Post-Apocalyptic</option>
             <option value="Thriller">Thriller</option>
             <option value="Memoir">Memoir</option>

             </select> 
             </div>
      <div className="books-grid">
        {findBook.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            coverImage={book.coverImage}
          />
        ))}
      </div>
    </section>
  );
}
