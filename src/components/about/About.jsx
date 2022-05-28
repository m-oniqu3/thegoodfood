import React from "react";
import Background from "../helpers/Background";
import AboutUsContent from "./AboutUsContent";
import AboutUsIntro from "./AboutUsIntro";
import AboutUsOffers from "./AboutUsOffers";
import greyBg from "../../images/greybg.png";

const About = () => {
  const about = { padding: "3rem 0 2rem" };

  return (
    <section id="about">
      <Background url={greyBg}>
        <div style={about}>
          <AboutUsIntro />
          <AboutUsContent />
          <AboutUsOffers />
        </div>
      </Background>
    </section>
  );
};

export default About;
