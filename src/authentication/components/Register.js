import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
    const [user, setUser] = useState({firstName: "", lastName: "", email: "", phoneNumber: "", password: ""})
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
        console.log(user.item, "item");
        console.log(user, "lkjahsdfh")
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
       await fetch("http://localhost:5000/auth/register", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).catch((err) => {
            console.error(err)
        })
        setUser({firstName: "", lastName: "", email: "", phoneNumber: "", password: ""});
        navigate("/login");
        console.log(user, "lllll");
    }

    console.log(user)
    return(
        <div>
            <h1>Registration</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="add_book_div">
                    <label className="add_book_label">Firstname</label>
                    <input className="add_book_input" name="firstName" id="firstName" placeholder="John" value={user.firstName}
                           onChange={(e) => handleOnChange(e)}/>
                </div>
                <div className="add_book_div">
                    <label className="add_book_label">Lastname</label>
                    <input type="text" className="add_book_input" name="lastName" id="lastName" placeholder="Smith" value={user.lastName}
                           onChange={(e) => handleOnChange(e)}/>
                </div>
                <div className="add_book_div">
                    <label className="add_book_label">Email</label>
                    <input type="email" className="add_book_input" name="email" id="email" placeholder="john@gmail.com" value={user.email}
                           onChange={(e) => handleOnChange(e)}/>
                </div>
                <div className="add_book_div">
                    <label className="add_book_label">Phone number</label>
                    <input type="number" className="add_book_input"  name="phoneNumber" id="phoneNumber" placeholder="+374 91 52 35 12" value={user.phoneNumber}
                           onChange={(e) => handleOnChange(e)}/>
                </div>
                <div className="add_book_div">
                    <label className="add_book_label">Password</label>
                    <input type="password" className="add_book_input"  name="password" id="password" placeholder="Password" value={user.password}
                              onChange={(e) => handleOnChange(e)}/>
                </div>


                <div>
                    <button className="add_book_add" type="submit" >Register</button>
                </div>
            </form>
        </div>
    )
}