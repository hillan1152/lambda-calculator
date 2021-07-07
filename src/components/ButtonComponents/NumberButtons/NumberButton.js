import React from "react";


const NumberButton = (props) => {
  return <button className="numBtn btn" onClick={() => props.number}>{props.number}</button>
};

export default NumberButton;
