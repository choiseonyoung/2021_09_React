import logo from "./logo.svg";
import "./App.css";
import "./css/menu.css";
import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import Header from "./comps/Header";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <BBsMain />
      </div>
    </BrowserRouter>
  );
}

export default App;
