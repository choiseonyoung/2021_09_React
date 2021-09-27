import React from "react";

function CounterInput(props) {
  const { setNumber } = props;
  const onChangeHandler = (e) => {
    const number = e.target.value;
    setNumber(number);
  };
  return (
    <div>
      <input placeholder="숫자를 입력하세요" onChange={onChangeHandler}></input>
    </div>
  );
}

export default CounterInput;
