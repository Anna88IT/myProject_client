import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "../styles/allBooksByName.css";


import {BookInLibrary} from "./BookInLibrary";

export const AllBooksByName = (title) => {
    const [books, setBooks] = useState();
    const {bookTitle}= useParams();
    useEffect(() => {
        console.log(bookTitle, "title");
        // const params = new URLSearchParams({ bookTitle: JSON.stringify(title) });       
        fetch(`http://localhost:5000?bookTitle=${bookTitle}`)
            .then(res => res.json())
            .then(data => {setBooks(data.books)
            console.log(data.isAuthenticated, "auth in booksByName")});
    }, []);

     return (
        <div className='page'>
            {books && books.map(book => (
                <BookInLibrary book={book} key={book.id}/>
            ))}

        </div>
    )
}