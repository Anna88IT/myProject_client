import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/menu.css";

export const Menu = () => {
    const [genres, setGenres] = useState();
    const [isAuth, setIsAuth] = useState();


    useEffect(() => {
        fetch("http://localhost:5000/genre")
            .then((res) => res.json())
            .then(data => setGenres(data));

        fetch("http://localhost:5000")
            .then((resp) => resp.json())
            .then((data) => {
                setIsAuth(data.isAuthenticated);
                console.log(data, "in menu");
                console.log(data.books, "in menu");
                console.log(data.isAuthenticated, "in menu");

            });
    }, []);

    // const handleLogin = () => {
    //     setIsOpen(!isOpen);
    //     // sendIsOpenToParent(!isOpen);
    //
    // };
    //
    // const sendIsOpenToParent = (isOpen) => {
    //     // Call the function passed from the parent component
    //     if (typeof props.onIsOpenChange === 'function') {
    //         props.onIsOpenChange(isOpen);
    //     }
    // };
const handleLogOut = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/logout")
        .then((res) => res.json())
        .then(data => setIsAuth(false));
}
    return (
            <div className="menu">
                <nav>
                      <ul>
                          <li className="menu_font"> <Link to="/">Home</Link> </li>
                          <li className="menu_font">Books
                              <ul className="underList">
                                  {genres && genres.map(genre => (
                                      <li id={genre.id} key={genre.id}><Link to={`/byGenre/${genre.id}`} className="link">{genre.genre}</Link></li>
                                  ))}
                              </ul>
                          </li>
                      </ul>
                      <ul>
                          <li className="menu_font"> Genres
                              <ul className="underList">
                                  <li><Link to="/addgenre">Add Genres</Link></li>
                                  <li><Link to="/editgenre">Edit Genres</Link></li>
                                  <li><Link to="/viewgenre">View Genres</Link></li>
                              </ul>
                          </li>
                              <li className="menu_font"> Libraries
                                  <ul className="underList">
                                      <li><Link to="/addLibrary">Add Library</Link></li>
                                      <li><Link to="/editauthor">Edit Author</Link></li>
                                      <li><Link to="/viewauthor">View Author</Link></li>
                                  </ul>
                              </li>
                              <li className="menu_font"> Books
                                  <ul className="underList">
                                      <li><Link to="/addbooks">Add Books</Link></li>
                                      <li><Link to="/editbooks">Edit Books</Link></li>
                                      <li><Link to="/viewbooks">View Books</Link></li>
                                  </ul>
                              </li>

                      </ul>
                      <ul>
                          <li className="menu_font"> <Link to="/about">About</Link> </li>
                          <li className="menu_font"> <Link to="/contactus">Contact us</Link> </li>

                          {
                              isAuth ? <li className="menu_font">Log out</li> :
                                  <>
                                      <li className="menu_font"><Link to="/registration" >Sign up</Link></li>
                                      <li className="menu_font" ><Link to="/login" >Log in</Link></li>
                                  </>

                          }

                      </ul>
                        </nav>
                    </div>
    )
}