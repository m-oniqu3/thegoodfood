import React from "react";
import Heading from "../header/Heading";

const Offers = (props) => {
  const offers = {
    display: "flex",
    flexDirection: "column",

    margin: "2rem 0",
  };

  const offersHeading = {
    display: "flex",
    alignItems: "center",
    gap: " 1rem",
  };

  return (
    <article style={offers}>
      <div style={offersHeading}>
        {props.icon}
        <Heading text={props.text} className={props.className} />
      </div>
      <div>
        <p className="paragraph">{props.paragraph}</p>
      </div>
    </article>
  );
};

export default Offers;
