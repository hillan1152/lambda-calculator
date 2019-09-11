import React from "react";

const OperatorButton = (props) => {
  return <button className="op-btn, btn">{props.operator.value}</button>     
};

export default OperatorButton;
