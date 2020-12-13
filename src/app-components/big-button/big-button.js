import React from "react";
import "./big-button.scss";

const BigButton = ({ text, _onClick = () => {} }) => {
  return (
    <button className="big-button" onClick={_onClick}>
      {text && <span>{text}</span>}
    </button>
  );
};

export default BigButton;
