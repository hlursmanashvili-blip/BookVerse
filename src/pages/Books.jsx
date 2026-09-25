import { useMemo, useState } from "react";
import BookCard from "../components/BookCard";
import "./Books.css"
import "./Index.css"



export default function Books({ books }) {
  
  const [search, setSearch] = useState("");
  const[genre, setGenre] = useState("All")
  const findBook = useMemo(() => {
    const searchText = search.toLowerCase();

     if(genre==="All"){
      return books;
    }

    return books.filter((book) => {
      return (
        ((book.title.toLowerCase().includes(searchText)) ||
        book.author.toLowerCase().includes(searchText)) &&
        (book.genre===genre || book.genre==="All")
      )

    });
  }, [books, search,genre]);


  return (
    <section className="books">
      <input
      className="search"
        type="text"
        placeholder="Search by author or title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="genre-buttons">
        <button onClick={()=>setGenre("All")}>All</button>
        <button onClick={()=>setGenre("Classic")}>Classic</button>
        <button onClick={()=>setGenre("Dystopian")}>Dystopian</button>
        <button onClick={()=>setGenre("Romance")}>Romance</button>
        <button onClick={()=>setGenre("Fantasy")}>Fantasy</button>
        <button onClick={()=>setGenre("Fiction")}>Fiction</button>
      </div>
      <div
      className="books-grid"
       
      >
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
