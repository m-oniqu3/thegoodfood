import React from "react";
import styled from "./Download.module.css";
import phone from "../../images/phone.png";
import { ImAndroid, ImAppleinc } from "react-icons/im";
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
      <span>earn loyalty points</span>
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
            Our new TGF app is a great way to keep track of your favourite
            dishes and get recommendations on what to order next. Plus, you can
            earn loyalty points every time you order through the app, which can
            be redeemed for freebies and discounts.
          </p>
          <p className="paragraph">
            Download the app today and enjoy the good food restaurant experience
            to the fullest!
          </p>
          <ImAndroid size="30px" color="lightgrey" />
          &nbsp; &nbsp;&nbsp;
          <ImAppleinc size="30px" color="lightgrey" />
        </article>
      </Wrapper>
    </section>
  );
};

export default Download;
