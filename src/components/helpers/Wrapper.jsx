import React from "react";

const Wrapper = (props) => {
  const wrap = {
    width: "85%",
    margin: "0 auto",
  };
  return <div style={wrap}>{props.children}</div>;
};

export default Wrapper;
