import React from "react";
import styled from "./TGIF.module.css";
import Wrapper from "../helpers/Wrapper";

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
              If you're looking for something different to do this Friday night,
              come to our restaurant and try our new specialty tacos! They're
              made with fresh, delicious ingredients and served with a smile.
              Our friendly staff will make sure you have a great experience, and
              you'll definitely want to come back for more. TGF'S TGIF is a
              great way to start the weekend, and the best way to end it.
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
