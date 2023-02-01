import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./carousel.css"
import Donate from "./components/Donate";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Donate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
