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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores sapiente alias enim, repellat omnis ullam voluptatem ea aliquam necessitatibus.";
  const paragraph2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores sapiente alias enim.";
  const paragraph3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const paragraph4 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores sapiente alias enim, repellat omnis ullam voluptatem.";
  return (
    <section>
      <Wrapper>
        <article>
          <div className={styled["offers-heading"]}>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, sit faucibus in sit consectetur
              adipiscing elit sit faucibus. Faucibus in sit sit faucibus.
              Tincidunt cras sit viverra curabitur lectus
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
