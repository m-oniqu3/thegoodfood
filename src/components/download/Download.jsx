import React from "react";
import styled from "./Download.module.css";
import phone from "../../images/phone.png";
import Button from "../button/Button";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";

const Download = () => {
  const text = (
    <>
      download <span>our tgf app</span>
    </>
  );

  const smlheading = (
    <>
      find out how you can <span> get meal deals</span>
    </>
  );
  return (
    <section className={styled.download}>
      <figure>
        <img src={phone} alt="Phone with the text the good food" />
      </figure>

      <Wrapper>
        <article className={styled["download-info"]}>
          <Heading text={text} className="heading-md" />
          <Heading text={smlheading} className="heading-sml" />
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            neque rerum necessitatibus blanditiis nulla provident consequatur,
            vel expedita fuga non!
          </p>
          <Button>Download for android</Button>
          <Button>Download for apple</Button>
        </article>
      </Wrapper>
    </section>
  );
};

export default Download;
