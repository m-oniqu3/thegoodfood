import React from "react";
import "./App.css";
import About from "./components/about/About";
import Download from "./components/download/Download";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Download />
      <Menu />
    </div>
  );
}

export default App;
