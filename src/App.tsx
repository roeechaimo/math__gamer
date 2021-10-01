import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./app/components/header/Header";

// TODO - excalidraw scheme - https://excalidraw.com/#json=5244963130441728,3qHGcXU9UF6Xa2ekW2nPig
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
