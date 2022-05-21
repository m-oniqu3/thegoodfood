import React from "react";
import greybg from "../../images/greybg.png";

const Background = (props) => {
  const background = {
    backgroundImage: `url(${greybg})`,
    backgroundPosition: "center",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return <div style={background}>{props.children}</div>;
};

export default Background;
