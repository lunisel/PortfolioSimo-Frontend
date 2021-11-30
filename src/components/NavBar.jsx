import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo-risigraph.png";
import { withRouter, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar expand="lg">
      <Container>
        <img src={logo} alt="logo" className="nav-logo" />
        <Link to="/" className="navbar-brand"> <span className="risi-brand-nav">Risi </span>Graph</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="nav-links-container">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/progetti" className="nav-link">Progetti</Link>
              <Link to="#contatti" className="nav-link pr-0">Contatti</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
