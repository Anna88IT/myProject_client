import React, {useEffect, useState} from "react";
import {Menu} from "../../menu/components/Menu";

export const AddBooks = () => {
    const [bookData, setBookData] = useState({
        bookTitle: "",
        author: "",
        releaseYear: "",
        language: "",
        description: "",
        genre_id: "",
        library_id: "",
        count: "",
        price: "",
        img: ""
    });

    const [libraries, setLibraries] = useState([]);
    const [genres, setGenres] = useState([]);


    useEffect(()=>{

        fetch("http://localhost:5000/genre")
            .then((resp) => resp.json())
            .then((data) => setGenres(data));
        fetch("http://localhost:5000/library")
            .then((resp) => resp.json())
            .then((data) => setLibraries(data))
    }, []);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setBookData((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
        console.log(bookData.item, "item");
        console.log(genres);
        console.log(bookData, "lkjahsdfh")
    };

      function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:5000/book", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookData)
        }).catch((err) => {
            console.error(err)

        })

        console.log(bookData);
    }

    return(
        <>
            <Menu />
            <div className="add_book_page">
                <h1 className="add_book_title">Add books</h1>
                <form className="add_book_form" onSubmit={handleSubmit}>
                    <div className="add_book_div">
                        <label className="add_book_label">Book title</label>
                        <input className="add_book_input" name="bookTitle" id="bookTitle" placeholder="Book title" value={bookData.bookTitle}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Author</label>
                        <input className="add_book_input" name="author" id="author" placeholder="Author" value={bookData.author}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Release year</label>
                        <input className="add_book_input" name="releaseYear" id="releaseYear" placeholder="releaseYear" value={bookData.releaseYear}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Language</label>
                        <input type="text" className="add_book_input" name="language" id="language" placeholder="language" value={bookData.language}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Description</label>
                        <textarea className="add_book_textarea" name="description" id="description" placeholder="Description" value={bookData.description}
                                  onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Genre</label>
                        <select name="genre_id" onChange={(e) => handleOnChange(e)}>
                            <option value="0"></option>
                            {genres && genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>{genre.genre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Library</label>
                        <select name="library_id" onChange={(e) => handleOnChange(e)}>
                            <option value="0"></option>
                            {libraries && libraries.map((library) => (
                                <option key={library.id} value={library.id}>{library.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Count</label>
                        <input type="number" className="add_book_input" name="count" id="count" placeholder="count" value={bookData.count}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Price</label>
                        <input type="text" className="add_book_input" name="price" id="price" placeholder="price" value={bookData.price}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Image</label>
                        <input type="text" className="add_book_input" name="img" id="img" placeholder="price" value={bookData.img}
                               onChange={(e) => handleOnChange(e)}/>
                    </div>
                    <div>
                        <button className="add_book_add" type="submit" >ADD</button>
                    </div>
                </form>
            </div>

        </>

    )
}