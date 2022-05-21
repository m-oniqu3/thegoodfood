import React from "react";
import styled from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <p>the good food</p>
      <GiHamburgerMenu size="25px" style={{ color: "var(--green)" }} />
    </nav>
  );
};

export default Navbar;
