import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Donate from "./components/Donate";
import "./carousel.css"
import Donate from "./components/Donate";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/" element={<Donate />} />
=======
          <Route path="/donate" element={<Donate />} />
>>>>>>> d46a3357f6599ced5c0f474cc38c781ba0419db9
        </Routes>
      </div>
    </div>
  );
}

export default App;
