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
      <Wrapper>
        <section className={styled.contact} id="contact">
          <div>
            <figure>
              <img src={spices} alt="Three small containers of spices" />
            </figure>
            <article>
              <Heading text={text} className="heading-md" />
              <p className="paragraph">
                If you're looking for a delicious meal and a good time, you'll
                want to come to the good food restaurant. We would love to hear
                from you and answer any questions you may have.
              </p>
            </article>
          </div>
          <form className={styled.form}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Your Message</label>
            <textarea name="message" rows="5" />
            <br />
            <Button>Send</Button>
          </form>
        </section>
      </Wrapper>
    </Background>
  );
};

export default Contact;
