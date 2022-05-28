import React from "react";
import Background from "../helpers/Background";
import CustomerFavourites from "./CustomerFavourites";
import TGIF from "./TGIF";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <section id="menu">
      <Background url={darkGreyBg}>
        <MenuIntro />
        <MenuItems />
        <CustomerFavourites />
        <TGIF />
      </Background>
    </section>
  );
};

export default Menu;
