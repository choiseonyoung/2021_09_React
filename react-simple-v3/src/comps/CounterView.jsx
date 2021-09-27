import React from "react";

function CounterView({ number }) {
  const intNum = Number(number);
  return (
    <div>
      <div>
        {intNum}와 20의 합 : {intNum + 20}
      </div>
      <div>
        {intNum}와 {intNum}의 곱 : {intNum * intNum}
      </div>
    </div>
  );
}

export default CounterView;
