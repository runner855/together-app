import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Groups } from "../Groups/Groups";
import { CreateGroup } from "../CreateGroup/CreateGroup";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/groups" />} />
        <Route path="/create-group" element={<CreateGroup />} />
      </Routes>
    </div>
  );
};
