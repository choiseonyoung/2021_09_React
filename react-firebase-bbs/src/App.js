import logo from "./logo.svg";
import "./App.css";
import "./css/menu.css";
import BBsMain from "./comps/BBsMain";
import Header from "./comps/Header";
import Body from "./comps/Body";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BBsMain />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
