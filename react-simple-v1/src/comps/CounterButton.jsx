import React from "react";

const CounterButton = ({ plus, minus }) => {
  return (
    <div>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
};

export default CounterButton;
