import "./App.css";
import BucketMain from "./comps/BucketMain";
import Footer from "./comps/Footer";
import BackImage from "./img/8.jpg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `scroll`,
    backgroundSize: "contain",
  };
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      {/* <Header /> */}
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
