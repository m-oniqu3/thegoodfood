import React from "react";
import styled from "./TGIF.module.css";
import Wrapper from "../helpers/Wrapper";
import blob from "../../images/blob.png";
import Heading from "../header/Heading";

const TGIF = () => {
  return (
    <section>
      <section className={styled["tgif-bg"]}>
        <Wrapper>
          <article className={styled["tgif-info"]}>
            <h1 className={styled.heading}>
              TGF's new <span>TGIF</span>
            </h1>
            <Heading text={<span>taco fridays</span>} className="heading-sml" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur recusandae culpa voluptates dolorum, labore ipsa quos
              enim quo architecto aperiam.
            </p>
          </article>
        </Wrapper>
      </section>
    </section>
  );
};

export default TGIF;

/* 
        <figure>
          <img src={blob} alt="Green background" />
        </figure>*/
