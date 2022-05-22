import React from "react";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import styled from "./MenuIntro.module.css";
import { GiForkKnifeSpoon } from "react-icons/gi";

const MenuIntro = () => {
  const url =
    "https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774";
  return (
    <section className={styled["menu-intro"]}>
      <figure>
        <img src={url} alt="A pizza" />
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
