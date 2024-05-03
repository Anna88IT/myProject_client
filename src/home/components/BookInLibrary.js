import React, {useEffect, useState} from "react";
import img from "../img/book.jpg";
import {Link, useNavigate} from "react-router-dom";

export const BookInLibrary = (book) => {
    const [count, setCount] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const navigate = useNavigate();

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleMinus = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    console.log(book)

    const handleChoose = (e) => {
        e.preventDefault();
        if(!startDate || !endDate || count === 0) {
            alert("Ընտրեք գրքերի քանակը և ընթերցանության ժամանակահատվածը");
        } else {
            navigate(`/order/${book.book.id}`);
            console.log(startDate, "start");
            console.log(endDate, "end");
        }
    }

    return(
        <div className="container">
            <div className="image">
                <img src={img}/>
            </div>
            <div className="sub_container">
                <div className="container_top">
                    <div className="title">
                        <h2>{book.book.bookTitle}</h2>
                        <h3>{book.book.author}</h3>
                        <h4>{book.book.genre.genre}</h4>
                    </div>
                    <div>
                        <p className="library">{book.book.library.name}</p>
                        <p className={book.book.count === 0 ? "not_available" : "available"}>{book.book.count === 0 ? 'Not available' : `Available ${book.book.count} books`}</p>
                        <p>{book.book.price} per day</p>
                    </div>
                </div>
                <div className="container_bottom">
                    <div>
                        <label>Start date</label>
                        <input type="date" onChange={(e) => setStartDate(e.target.value)}/>
                    </div>
                    <div>
                        <label>End Date</label>
                        <input type="date" onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div>
                        <div>
                            <label>Count</label>
                        </div>
                        <div>
                            <span className="pl_mn" onClick={handleMinus}> - </span>
                            <span>{count}</span>
                            <span className="pl_mn" onClick={handleAdd}> + </span>
                        </div>
                    </div>
                    <button className="choose" onClick={handleChoose}>Choose</button>
                </div>
            </div>

        </div>
    )
}