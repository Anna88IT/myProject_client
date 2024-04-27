import './App.css';
import {Home} from "./home/components/Home"
import {AddBooks} from "./admin/components/AddBooks"
import {AddGenre} from "./admin/components/AddGenre"
import {AddLibrary} from "./admin/components/AddLibrary"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Register} from "./authentication/components/Register";
import React from "react";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Register />} />
                <Route path = "/addgenre" element={<AddGenre />} />
                <Route path = "/addlibrary" element={<AddLibrary />} />
                <Route path = "/addbooks" element={<AddBooks />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
