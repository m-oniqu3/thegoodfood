import React from "react";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import styled from "./MenuIntro.module.css";
import { GiForkKnifeSpoon } from "react-icons/gi";
import wings from "../../images/wings.jpg";

const MenuIntro = () => {
  return (
    <section className={styled["menu-intro"]}>
      <figure>
        <img
          src={wings}
          alt="Hot wings created by timolina - www.freepik.com"
        />
      </figure>
      <Wrapper>
        <article>
          <Heading
            text={
              <>
                our <span>menu</span>
              </>
            }
            className="heading-md"
          />

          <p className="paragraph">
            Our menu features a variety of delicious options, including soups,
            salads and entrees. There is something for everyone, and customers
            can expect to find something to suit their taste. We pride ourself
            on using fresh, local ingredients, and all of the dishes are made
            from scratch. Our menu changes seasonally, so there are always new
            and exciting options to try.
          </p>
          <GiForkKnifeSpoon size="40px" />
        </article>
      </Wrapper>
    </section>
  );
};

export default MenuIntro;
