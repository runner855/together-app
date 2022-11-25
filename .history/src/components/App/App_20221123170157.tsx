import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Network />} />
        <Route path="/create-group" element={<Navigate to="/create-group" />} />
      </Routes>
    </div>
  );
}

export default App;
