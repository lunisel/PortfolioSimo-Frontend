import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Progetti from "./components/Progetti";

function App() {
  return (
    <div className="App" id="top-page">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact render={(routerProps) => <Home {...routerProps}/>}/>
        <Route path="/progetti" exact render={(routerProps) => <Progetti {...routerProps}/>}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
