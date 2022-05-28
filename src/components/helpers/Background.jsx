import React from "react";

const Background = (props) => {
  const background = {
    background: `linear-gradient(0deg, rgba(244, 243, 243, 0.496), rgba(244, 243, 243, 0.496)), url(${props.url})`,
    backgroundPosition: "center",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return <div style={background}>{props.children}</div>;
};

export default Background;
