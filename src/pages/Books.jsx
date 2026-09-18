import { useMemo, useState } from "react";
import BookCard from "../components/BookCard";

export default function Books({ books }) {
  const [search, setSearch] = useState("");
  const findBook = useMemo(() => {
    const searchText = search.toLowerCase();
    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText)
      );
    });
  }, [books, search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search by author or title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        {findBook.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            coverImage={book.coverImage}
          />
        ))}
      </div>
    </div>
  );
}
