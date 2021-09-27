import "./App.css";
import { useState } from "react";
import CounterBody from "./comps/CounterBody";

function App() {
  let [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <CounterBody number={number} setNumber={setNumber} />
      </header>
    </div>
  );
}

export default App;
