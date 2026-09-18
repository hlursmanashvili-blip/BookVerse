import { useMemo, useState } from "react";

export default function Books({ books }) {
  const [search, setSearch] = useState("");
  const findBook = useMemo(
    (book) => {
      const searchText = search.toLowerCase();
      return books.filter((book) => {
        return (
          book.title.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText)
        );
      });
    },
    [books, search],
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search by author or title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {findBook.map((book) => (
        <h2>{book.title}</h2>
      ))}
    </div>
  );
}
