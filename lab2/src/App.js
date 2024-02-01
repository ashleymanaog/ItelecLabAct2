// import logo from "./yolk.png";
import "./App.css";
import "./styles/globals.css";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Directory from "./Directory";
// import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Navigationbar />
      <Header />
      <Directory />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
