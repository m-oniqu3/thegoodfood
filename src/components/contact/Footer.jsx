import React from "react";
import Wrapper from "../helpers/Wrapper";
import styled from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImAndroid, ImAppleinc } from "react-icons/im";

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <Wrapper>
        <article>
          <p className={styled.logo}>the good food</p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            autem sit libero est sequi dolores?
          </p>
        </article>

        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Find us on</h2>

          <div className={styled.socials}>
            <ImAndroid size="25px" />
            <ImAppleinc size="25px" />
            <AiFillInstagram size="30px" />
            <AiOutlineTwitter size="30px" />
            <FaFacebookSquare size="28px" />
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
