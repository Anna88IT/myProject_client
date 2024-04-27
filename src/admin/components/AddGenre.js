import React, {useEffect, useState} from "react";
import {Menu} from "../../menu/components/Menu";

export const AddGenre = () =>{
    
    const [genre, setGenre] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        setData({"genre" : genre});
    }, [genre]);
    const handleAdd = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/genre", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).catch((err) => {
            console.error(err)
        })
        setGenre("");
    }
    console.log(genre);
    return(
        <>
            <Menu />
            <div className="add_book_page">
                <h1 className="add_book_title">Add Genres</h1>
                <form className="add_book_form" onSubmit={handleAdd}>
                    <div className="add_book_div">
                        <label className="add_book_label">Input book genres</label>
                        <input
                            className="add_book_input"
                            type="text"
                            name="genre"
                            id="genre"
                            placeholder='exp. drama'
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </div>
                    <button className="add_book_add" type="submit">Add</button>
                </form>
            </div>
        </>

    )
}