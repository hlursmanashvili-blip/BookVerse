import { addFavorite,deleteFavorite } from "../store/favoritesSlice";
import "./BookCard.css"
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import {Heart, RemoveFormatting} from  "lucide-react";
import { useState } from "react";


export default function BookCard({id, title, author, genre, coverImage }) {
  const dispatch=useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <div
      className="book-card"
      >
        <div className="img-container" >
          <button className="addtofav-btn" onClick={()=>{
            if(!isFavorite)
          {
            dispatch(addFavorite(id));
            (setIsFavorite(!isFavorite))}
            else{
              dispatch(deleteFavorite(id));
            (setIsFavorite(!isFavorite))

            }

          }
          }>
          <Heart
           className={`heart ${isFavorite ? "active" : ""}`}
        size={22}
        
      />
      </button>
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
          
        </div>
      </div>
    </>
  );
}
