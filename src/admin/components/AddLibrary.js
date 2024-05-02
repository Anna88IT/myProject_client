import React, { useState } from "react";

export const AddLibrary = () =>{
    
    const [libraryData, setLibraryData] = useState({name: "", workingHours: [{startTime: "", endTime: ""}], address: ""});

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'startTime' || name === 'endTime') {
            // Update startTime or endTime in the first object of workingHours array
            setLibraryData((prevLibraryData) => ({
                ...prevLibraryData,
                workingHours: [{
                    ...prevLibraryData.workingHours[0],
                    [name]: value
                }],
            }));
        } else {
            // Update other properties directly
            setLibraryData((prevLibraryData) => ({
                ...prevLibraryData,
                [name]: value
            }));
        }
        console.log(libraryData);
    };
    const handleAdd = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/library", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(libraryData)
        }).catch((err) => {
            console.error(err)
        })
        console.log(libraryData);
        setLibraryData({
            name: "",
            workingHours: [{startTime: "", endTime: ""}],
            address: ""
        })
    }
  
    return(
        <>
            <div className="add_book_page">
                <h1 className="add_book_title">Add Library</h1>
                <form className="add_book_form" onSubmit={handleAdd}>
                    <div className="add_book_div">
                        <label className="add_book_label">Input library name</label>
                        <input
                            className="add_book_input"
                            type="text"
                            name="name"
                            id="name"
                            value={libraryData.name}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Input library address</label>
                        <input
                            className="add_book_input"
                            type="text"
                            name="address"
                            id="address"
                            value={libraryData.address}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Input opening time</label>
                        <input
                            className="add_book_input"
                            type="text"
                            name="startTime"
                            id="startTime"
                            value={libraryData.workingHours[0].startTime}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <div className="add_book_div">
                        <label className="add_book_label">Input closing time</label>
                        <input
                            className="add_book_input"
                            type="text"
                            name="endTime"
                            id="endTime"
                            value={libraryData.workingHours[0].endTime}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </div>
                    <button className="add_book_add" type="submit">Add</button>
                </form>
            </div>
        </>

    )
}