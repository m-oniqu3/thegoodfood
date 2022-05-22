import React from "react";
import Background from "../helpers/Background";
import CustomerFavourites from "./CustomerFavourites";
import TGIF from "./TGIF";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";

const Menu = () => {
  return (
    <section>
      <Background url={darkGreyBg}>
        <MenuIntro />
        <CustomerFavourites />
        <TGIF />
      </Background>
    </section>
  );
};

export default Menu;
