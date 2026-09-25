import { addFavorite } from "../store/favoritesSlice";
import "./BookCard.css"
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"


export default function BookCard({id, title, author, genre, coverImage }) {
  const dispatch=useDispatch();
  return (
    <>
      <div
      className="book-card"
      >
        <div className="img-container" >
            <Link to={`/books/${id}`}>
            <img src={coverImage} alt="book-cover" />
            </Link>
        </div>
        <div
          className="book-description"
        >
          <Link to={`/books/${id}`}>
            <h1>{title}</h1>
          </Link>
          <p>{author}</p>
          <p>{genre}</p>
          <button onClick={()=>dispatch(addFavorite(id))}>Add to favorites</button>
        </div>
      </div>
    </>
  );
}
