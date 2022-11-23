import React from "react";
import { AccountsList } from "../AccountsList/AccountsList";
import { NavBar } from "../NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AccountsList />
    </div>
  );
}

export default App;
