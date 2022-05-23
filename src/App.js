import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/contact/Footer";
import Download from "./components/download/Download";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Menu />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
