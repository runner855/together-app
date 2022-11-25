import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Network } from "../Network/Network";
import { CreateGroup } from "../CreateGroup/CreateGroup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Network />} />
        <Route path="/create-group" element={<CreateGroup />} />
      </Routes>
    </div>
  );
}

export default App;
