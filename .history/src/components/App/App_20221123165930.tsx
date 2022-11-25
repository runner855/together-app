import React from "react";
import { Network } from "../Network/Network";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/upcoming" />} />
        <Route path="/:page" element={<MoviesContainer />} />
        <Route path="/MovieCard/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
}

export default App;
