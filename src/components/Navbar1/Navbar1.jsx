import { Link } from "react-router-dom";
import logo from "../../logo-risigraph.png";
import { GoThreeBars, GoX } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import "./navbar1.css";
import { withRouter } from "react-router-dom";

const Navbar1 = (props) => {
  const [navToggle, setNavToggle] = useState(false);

  const ref = useRef(null);

  const clickOut = (e) => {
    if (!ref.current.contains(e.target)) {
      setNavToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickOut);
    return () => {
      window.removeEventListener("mousedown", clickOut);
    };
  }, []);
  return (
    <nav id="main-nav">
      <div className="container nav1">
        <div className="brand-title" onClick={() => props.history.push("/")}>
          <img src={logo} alt="Risi graph logo" className="nav-logo" />
          <h2 className="logo-name">
            RISI <span>GRAPH</span>
          </h2>
        </div>
        <GoThreeBars
          className={navToggle ? "d-none" : "burger-icon"}
          onClick={() => setNavToggle(true)}
        />
        <GoX
          className={navToggle ? "close-icon" : "d-none"}
          onClick={() => setNavToggle(false)}
        />
        <ul
          className={
            navToggle ? "nav-links-container active" : "nav-links-container"
          }
          ref={ref}
        >
          <li>
            <Link
              to="/"
              className={props.location.pathname === "/" ? "active" : ""}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={
                props.location.pathname === "/portfolio" ? "active" : ""
              }
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <a
              href="#footer-main"
              className={
                props.location.pathname === "/contatti" ? "active" : ""
              }
            >
              CONTATTI
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar1);
