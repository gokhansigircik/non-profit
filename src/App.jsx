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
      <Donate />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
