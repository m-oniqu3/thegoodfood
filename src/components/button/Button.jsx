import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button class="btn flash-slide flash-slide--green">{props.children}</button>
  );
};

export default Button;
