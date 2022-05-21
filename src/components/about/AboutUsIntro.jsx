import React from "react";
import styled from "./AboutUsIntro.module.css";
import squarePlate from "../../images/square-plate.png";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";

const AboutUsIntro = () => {
  return (
    <section className={styled["about-us-intro"]}>
      <Wrapper>
        <figure>
          <img
            src={squarePlate}
            alt="Black plate with rice and shrimp and vegetables"
          />
          <article>
            <Heading
              text={
                <>
                  about <span>us</span>
                </>
              }
              className="heading-md"
            />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in sit sit faucibus. Tincidunt cras sit viverra curabitur lectus
              aenean. Ut egestas odio pellentesque aenean. Mattis eu felis
              porttitor pretium.
            </p>

            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in sit sit faucibus. Tincidunt
            </p>
          </article>
        </figure>
      </Wrapper>
    </section>
  );
};

export default AboutUsIntro;
