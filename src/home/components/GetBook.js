import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const GetBook = () => {
    const [book, setBook] = useState();
    const params = useParams();
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => {
                setBook(data.books[0]);
                const isAuthenticated = data.isAuthenticated;
                console.log(data);
                console.log(book, "book");
                console.log(isAuthenticated, "auth");
            });

    }, []);

    console.log(params)
    return(
        <div>
            <h1>ORDER BOOK</h1>
            <p>{book.bookTitle}</p>
        </div>
    )
}