import logo from "../logo-risigraph.png";
import { withRouter, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { Anchor } from "antd";
import { useState } from "react";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand-title">
          <img src={logo} alt="Risi graph logo" className="nav-logo" />
          <h2 className="logo-name">
            RISI <span>GRAPH</span>
          </h2>
        </div>
        <FaBars className="nav-toggle" onClick={() => setToggle(!toggle)} />
        <div className={toggle ? "toggled toggle-links" : "toggle-links"}>
          <Link
            to="/"
            className={props.location.pathname === "/" ? "active" : ""}
          >
            HOME
          </Link>
          <Link
            to="/progetti"
            className={props.location.pathname === "/progetti" ? "active" : ""}
          >
            PROGETTI
          </Link>
          <Link
            to="/contatti"
            className={props.location.pathname === "/contatti" ? "active" : ""}
          >
            CONTATTI
          </Link>
        </div>
        <div className="navbar-links">
          <Link
            to="/"
            className={props.location.pathname === "/" ? "active" : ""}
          >
            HOME
          </Link>
          <Link
            to="/progetti"
            className={props.location.pathname === "/progetti" ? "active" : ""}
          >
            PROGETTI
          </Link>
          <Link
            to="/contatti"
            className={props.location.pathname === "/contatti" ? "active" : ""}
          >
            CONTATTI
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
