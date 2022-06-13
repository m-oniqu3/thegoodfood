import React from "react";
import styled from "./AboutUsContent.module.css";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import whitePlate from "../../images/white-plate.png";
import pizza from "../../images/pizza.png";

const AboutUsContent = () => {
  return (
    <section className={styled["about-us-content"]}>
      <Wrapper>
        <div className={styled.content}>
          <figure className={styled.plate}>
            <img src={whitePlate} alt="A plate of salad with sauce " />
          </figure>

          <article>
            <Heading
              text={
                <>
                  serving you <span> good food</span> fast
                </>
              }
              className="heading-md"
            />
            <p className="paragraph">
              We're always serving quality food fast that is always cooked to
              perfection. With a menu of delicious options, and friendly staff
              visit us if you are looking for a great meal.
            </p>
            <p className="paragraph">
              Serving good food fast is our game. With fresh and high-quality
              ingredients in our dishes, you can be sure you're getting a
              nutritious and delicious meal when you eat here.
            </p>
            <figure className={styled.pizza}>
              <img src={pizza} alt="Pizza" />
            </figure>{" "}
          </article>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUsContent;
