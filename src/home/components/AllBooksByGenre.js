import React, {useEffect, useState} from "react";
import {Book} from "./Book";
import {useParams} from "react-router-dom"

export const AllBooksByGenre = () => {
    const [books, setBooks] = useState();
    const{genre} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000?genre_id=${genre}`)
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [genre])
console.log(genre, "genre");
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