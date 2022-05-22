import React from "react";

const Background = (props) => {
  const background = {
    backgroundImage: `url(${props.url})`,
    backgroundPosition: "center",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return <div style={background}>{props.children}</div>;
};

export default Background;
