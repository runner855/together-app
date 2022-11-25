import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/network" />} />
      </Routes>
    </div>
  );
}

export default App;
