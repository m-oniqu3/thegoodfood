import React, { useEffect, useState } from "react";
import styled from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  // state to manage the menu
  const [showNav, setShowNav] = useState(false);

  // function to toggle the menu
  const handleMenu = () => setShowNav((showNav) => !showNav);

  //function to show the menu when the window resizes
  useEffect(() => {
    function showItems() {
      if (window.innerWidth > 700) {
        setShowNav(true);
      } else if (showNav) {
        setShowNav(false);
      }
    }

    window.addEventListener("resize", showItems);

    return () => window.removeEventListener("resize", showItems);
  }, [showNav]);

  return (
    <nav className={styled.navbar}>
      <p>the good food</p>

      <div onClick={handleMenu} className={styled.icon}>
        <GiHamburgerMenu size="25px" style={{ color: "var(--white)" }} />
      </div>

      {/* show menu is showNav is true */}
      {showNav && (
        <ul className={styled.links}>
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
