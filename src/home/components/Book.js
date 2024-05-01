import React from "react";
import img from "../img/book.jpg";
import {Link} from "react-router-dom";

export const Book = (book) => {
    
    return(
        <div key={book.book.id} className="book_div">
            <h4>{book.book.bookTitle}</h4>
            <p>{book.book.author}</p>
            <p>{book.book.genre.genre}</p>
            <img className="img" src={img}/>
            <button className="choose"><Link to={`/${book.book.bookTitle}`}>Choose</Link></button>
        </div>  
    )
}