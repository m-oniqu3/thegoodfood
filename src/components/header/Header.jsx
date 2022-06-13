import React from "react";
import styled from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import Wrapper from "../helpers/Wrapper";
import Button from "../button/Button";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className={styled.header} id="home">
      <Wrapper>
        <Navbar />

        <article className={styled["header-intro"]}>
          <h1>
            <span> good</span> food good <span>life</span>
          </h1>
          <p className="paragraph">
            If you are ever in the mood for some good food, The Good Food is
            theplace for you. We offer a variety mouth-watering meals that are
            sure to please even the pickiest of eaters. With our amazing food
            and welcoming staff, we will make sure that you have a great
            experience every time.
          </p>

          <Button>
            <Link to="#menu" smooth>
              see menu
            </Link>
          </Button>
        </article>
      </Wrapper>
    </header>
  );
};

export default Header;
