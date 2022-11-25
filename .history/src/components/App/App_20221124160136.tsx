import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Groups } from "../Groups/Groups";
import { CreateGroup } from "../CreateGroup/CreateGroup";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Groups />} />
        <Route path="/create-group" element={<CreateGroup />} />
      </Routes>
    </div>
  );
};
