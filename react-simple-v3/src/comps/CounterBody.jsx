import React, { useState } from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody(props) {
  return (
    <div>
      <CounterInput setNumber={props.setNumber} />
      <CounterView number={props.number} />
    </div>
  );
}

export default CounterBody;
