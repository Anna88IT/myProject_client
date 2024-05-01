import React, {useEffect, useState} from "react";
import "../styles/login.css"
import {useNavigate} from "react-router-dom";

export const Login = () => { 
    
    const [loginData, setLoginData] = useState({email: "", password: ""});
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setLoginData((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
        console.log(loginData.item, "item");
        console.log(loginData, "lkjahsdfh")
    };
    // useEffect(() => {
    //     fetch("http://localhost:5000/auth/login")
    //         .then(res => res.json())
    //         .then(data => setIsAuth(data));
    // }, [])

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response =  await fetch("http://localhost:5000/auth/login", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            }).catch((err) => {
                console.error(err)
            });
            if (response.ok) {
                setIsAuth(true);
                navigate("/");
                console.log(response);
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        console.log(loginData, "lllll");
    }
    
    return(
        <div className="login_form">
            <form  onSubmit={(e) => handleSubmit(e)}>
                <div className="input">
                    <label className="add_book_label">Email</label>
                    <input type="email" className="add_book_input" name="email" id="email" placeholder="john@gmail.com" value={loginData.email}
                           onChange={(e) => handleOnChange(e)}/>
                </div>
                <div className="input">
                    <label className="add_book_label">Password</label>
                    <input type="password" className="add_book_input"  name="password" id="password" placeholder="Password" value={loginData.password}
                           onChange={(e) => handleOnChange(e)}/>
                </div>


                <div>
                    <button className="login" type="submit" >Login</button>
                </div>
            </form>
        </div>
        
    )
}