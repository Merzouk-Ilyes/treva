import Home from "./components/Home";
import Hire from "./components/Hire";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Sub from "./components/Sub";
import bg from "./assets/bg.svg";
import "./app.sass";

function App() {
  return (
    <div className="App">
      {/* HOME */}
      <Home />
      {/* BIG-IMAGE */}
      <div className="bg-image">
        <img src={bg} alt="bg" />
      </div>
      {/* HIRE */}
      <Hire />
      {/* WORK */}
      <Work />
      {/* SUBSCRIBE */}
      <Sub />
      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}

export default App;
