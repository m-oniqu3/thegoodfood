import React from "react";
import styled from "./AboutUsOffers.module.css";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import Offers from "./Offers";
import { GiFarmTractor, GiKnifeFork } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineGppGood } from "react-icons/md";

const AboutUsOffers = () => {
  const headingText = (
    <>
      What we <span>offer</span>
    </>
  );

  const offer1 = (
    <>
      <span>locally</span> sourced
    </>
  );

  const offer2 = (
    <>
      <span>declicous</span> food
    </>
  );

  const offer3 = (
    <>
      always <span>fresh</span>
    </>
  );

  const offer4 = (
    <>
      <span>quality</span> service
    </>
  );

  const space = { padding: "1rem 0" };

  const paragraph1 =
    "We support the local economy to help to create jobs in the community. We pride ourselves in supporting businesses and farmers in the area. We are always on the lookout for new and better ways to help our community. Our locally sourced food is always fresh, tasty and flavourful. ";
  const paragraph2 =
    "We have a passion for serving quality dishes that excite the taste buds. Using the freshest ingredients we take the time to prepare each dish with care. Our attention to detail ensures that every meal is full of flavor and perfectly cooked.";
  const paragraph3 =
    "We are known for offering food that is always fresh, using the freshest locally sourced ingredients everytime. We ensure our customers are always getting the best possible product.";
  const paragraph4 =
    "Our staff is attentive and always ready to help. Our restaurant is always clean and organized, making it a pleasant place to eat. Our food is delicious and reasonably priced, making it a great value for customers.";

  return (
    <section className={styled["about-offers"]}>
      <Wrapper>
        <article>
          <div className={styled["offers-heading"]}>
            <p className="paragraph">
              We offer a wide variety of food items for customers to choose
              from. There is something for everyone here, whether you are
              looking for a light meal or a hearty meal.
            </p>
            <div style={space}>
              <Heading text={headingText} className="heading-md" />
            </div>
          </div>

          <section className={styled["offers-content"]}>
            <Offers
              icon={<GiFarmTractor size="40px" />}
              text={offer1}
              className="heading-sml"
              paragraph={paragraph1}
            />
            <Offers
              icon={<GiKnifeFork size="35px" />}
              text={offer2}
              className="heading-sml"
              paragraph={paragraph2}
            />
            <Offers
              icon={<FaLeaf size="35px" />}
              text={offer3}
              className="heading-sml"
              paragraph={paragraph3}
            />
            <Offers
              icon={<MdOutlineGppGood size="40px" />}
              text={offer4}
              className="heading-sml"
              paragraph={paragraph4}
            />
          </section>
        </article>
      </Wrapper>
    </section>
  );
};

export default AboutUsOffers;
