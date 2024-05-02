import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

export const GetBook = () => {
    const params = useParams();
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    console.log(params)
    return(
        <div>
            <h1>ORDER BOOK</h1>
        </div>
    )
}