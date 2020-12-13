import React from "react";
import "./button.components.scss";

const ButtonComponent = ({ text, _onClick = () => {} }) => {
  return (
    <button className="button-click" onClick={_onClick}>
      {text && <span>{text}</span>}
    </button>
  );
};

export default ButtonComponent;
