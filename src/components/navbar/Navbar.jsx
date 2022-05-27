import React, { useState } from "react";
import styled from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleMenu = () => setShowNav((showNav) => !showNav);

  return (
    <nav className={styled.navbar}>
      <p>the good food</p>

      <div onClick={handleMenu}>
        <GiHamburgerMenu size="25px" style={{ color: "var(--green)" }} />
      </div>

      {showNav && (
        <ul
          className={styled.links}
          onClick={() => setShowNav((showNav) => !showNav)}
        >
          <li>
            <Link to="#home" smooth>
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="#menu" smooth>
              Menu
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
