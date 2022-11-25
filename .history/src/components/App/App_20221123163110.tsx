import React from "react";
import { AccountsList, Network } from "../Network/Network";
import { NavBar } from "../NavBar/NavBar";
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
