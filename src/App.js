import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact render={(routerProps) => <Home {...routerProps}/>}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
