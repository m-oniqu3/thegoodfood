import React from "react";
import Heading from "../header/Heading";

const Offers = (props) => {
  const offers = {
    display: "flex",
    gap: "1rem",
    margin: "2rem 0",
  };

  return (
    <article style={offers}>
      <div> {props.icon}</div>
      <div>
        <Heading text={props.text} className={props.className} />
        <p className="paragraph">{props.paragraph}</p>
      </div>
    </article>
  );
};

export default Offers;
