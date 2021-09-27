import React, { useState } from "react";
import CounterButton from "./CounterButton";

const CounterView = ({ count }) => {
  return <div>카운트: {count}</div>;
};

export default CounterView;
