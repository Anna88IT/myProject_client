import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BooksInfo} from "./BookInfo";

export const GetBook = () => {
    const [book, setBook] = useState({});
    const params = useParams();
    useEffect(  () => {
        console.log("kkkkk")
         fetch(`http://localhost:5000/order?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                const isAuthenticated = data.isAuthenticated;
                console.log(data.books[0].bookTitle, "data");
                setBook(data.books[0]);

                // console.log(isAuthenticated, "auth");
            });

     }, [params.id]);

    console.log(book, "book1111");

    console.log(params)
    return(
        <div>
            <h1>ORDER BOOK</h1>
            {/*<BooksInfo book = {book}/>*/}
            <p>{book.bookTitle}</p>

        </div>
    )
}