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

        {/* //todo change heading to good food good life*/}
        <article className={styled["header-intro"]}>
          <h1>
            <span> good</span> food good <span>life</span>
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            perferendis exercitationem iste quia deserunt fugiat corrupti,
            repudiandae praesentium. Quam reprehenderit earum odit nobis porro
            amet?
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
