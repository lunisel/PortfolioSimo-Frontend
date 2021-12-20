import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Progetti from "./components/Progetti";
import Navbar1 from "./components/Navbar1/Navbar1.jsx";

function App() {
  return (
    <div className="App" id="top-page">
      <BrowserRouter>
        <Navbar1 />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          path="/progetti"
          exact
          render={(routerProps) => <Progetti {...routerProps} />}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
