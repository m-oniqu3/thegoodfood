import React from "react";
import styled from "./Contact.module.css";
import Heading from "../header/Heading";
import Background from "../helpers/Background";
import Wrapper from "../helpers/Wrapper";
import greyBg from "../../images/greybg.png";
import spices from "../../images/spices.png";
import Button from "../button/Button";

const Contact = () => {
  const text = (
    <>
      get in <span>touch</span> with us
    </>
  );
  return (
    <Background url={greyBg}>
      <section className={styled.contact} id="contact">
        <Wrapper>
          <figure>
            <img src={spices} alt="Three small containers of spices" />
          </figure>

          <article>
            <Heading text={text} className="heading-md" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nihil sit consectetur minus dolor culpa. At eos laudantium
              consequatur tenetur?
            </p>
          </article>

          <form className={styled.form}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Your Message</label>
            <textarea name="message" rows="5" cols="20" />
            <br />
            <Button>Send</Button>
          </form>
        </Wrapper>
      </section>
    </Background>
  );
};

export default Contact;
