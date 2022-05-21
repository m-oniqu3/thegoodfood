import React from "react";
import Background from "../helpers/Background";
import AboutUsContent from "./AboutUsContent";
import AboutUsIntro from "./AboutUsIntro";

const About = () => {
  return (
    <section>
      <Background>
        <AboutUsIntro />
        <AboutUsContent />
      </Background>
    </section>
  );
};

export default About;
