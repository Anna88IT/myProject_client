import './App.css';
import {Home} from "./home/components/Home"
import {AddBooks} from "./admin/components/AddBooks"
import {AddGenre} from "./admin/components/AddGenre"
import {AddLibrary} from "./admin/components/AddLibrary"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Register} from "./authentication/components/Register";
import {Login} from "./authentication/components/Login";
import React from "react";
import {Menu} from "./menu/components/Menu";
import {AllBooksByName} from "./home/components/AllBooksByName";
import {AllBooksByGenre} from "./home/components/AllBooksByGenre";


function App() {
  return (
      <>
          <div className="App">
              <Router>
                  <Menu/>

                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/registration" element={<Register />} />
                      <Route path="/login" element={<Login />} />
                      <Route path = "/addgenre" element={<AddGenre />} />
                      <Route path = "/addlibrary" element={<AddLibrary />} />
                      <Route path = "/addbooks" element={<AddBooks />} />
                      <Route path = ":bookTitle" element={<AllBooksByName />} />
                      <Route path = "byGenre/:genre" element={<AllBooksByGenre />} />
                  </Routes>
              </Router>
          </div>
      </>
      
  );
}

export default App;
