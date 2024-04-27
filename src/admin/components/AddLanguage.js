import React, {useEffect, useState} from "react";

export const AddLanguage = () =>{
    
    const [language, setlanguage] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        setData({"language" : language});
    }, [language]);
    const handleAdd = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/admin/language", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).catch((err) => {
            console.error(err)
        })
        setlanguage("");
    }
    console.log(language);
    return(
        <div className="add_book_page">
            <h1 className="add_book_title">Add Language</h1>
            <form className="add_book_form" onSubmit={handleAdd}>
                <div className="add_book_div">
                    <label className="add_book_label">Input language</label>
                    <input
                        className="add_book_input"
                        type="text"
                        name="languge" 
                        id="languge"
                        placeholder='exp. English'
                        value={language}
                        onChange={(e) => setlanguage(e.target.value)}
                    />
                </div>
                <button className="add_book_add" type="submit">Add</button>
            </form>
        </div>
    )
}