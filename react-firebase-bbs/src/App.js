import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, MainNav, BBsMain, BBsWrite, Footer } from "./comps";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route path="/" component={BBsMain} exact />
          <Route path="/write" component={BBsWrite} exact />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
