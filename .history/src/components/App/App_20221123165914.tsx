import React from "react";
import { Network } from "../Network/Network";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Network />
    </div>
  );
}

export default App;
