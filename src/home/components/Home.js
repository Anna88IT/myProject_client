import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/home.css";
import img from "../img/book.jpg";
import {Book} from "./Book";
export const Home = () => {

    const [books, setBooks] = useState();
    
    useEffect(() => {
        fetch("http://localhost:5000")
            .then((resp) => resp.json())
            .then((data) => {
                setBooks(data.books);
                console.log(data);
                console.log(data.books);
                console.log(data.isAuthenticated, "home");
            });
    }, [])

    return(
        <div className="home">
            <div className="books">
                {books && books.map(book => (
                    <Book book={book} key={book.id}/>
                ))}
                
            </div>
        </div>
    )
}