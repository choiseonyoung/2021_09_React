import { useState } from "react";
import "./App.css";
import CounterButton from "./comps/CounterButton";
import CounterView from "./comps/CounterView";

function App() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <CounterView count={count} />
        <CounterButton plus={plus} minus={minus} />
        {/* plus, minus 함수를 전달하니 CounterButton에서 실행을 해라 */}
      </header>
    </div>
  );
}

export default App;
