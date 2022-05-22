import React from "react";
import Background from "../helpers/Background";
import CustomerFavourites from "./CustomerFavourites";
import TGIF from "./TGIF";

const Menu = () => {
  return (
    <section>
      <Background>
        <CustomerFavourites />
        <TGIF />
      </Background>
    </section>
  );
};

export default Menu;
