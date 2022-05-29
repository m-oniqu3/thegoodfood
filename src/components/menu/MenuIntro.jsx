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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            voluptatem quidem ea iure quia voluptatibus quaerat eaque, dolorum
            pariatur unde?
          </p>
          <GiForkKnifeSpoon size="40px" />
        </article>
      </Wrapper>
    </section>
  );
};

export default MenuIntro;
