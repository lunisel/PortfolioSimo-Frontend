import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo-risigraph.png";
import { withRouter } from "react-router-dom";

import { Anchor } from "antd";

const NavBar = (props) => {
  return (
    <Navbar expand="lg" id="navbar">
      <Container>
        <img src={logo} alt="logo" className="nav-logo" />
        <a href="/" className="navbar-brand">
          <span className="risi-brand-nav">Risi </span>Graph
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Anchor affix={false}>
              <Anchor.Link href="/" className="nav-link" title="Home" />
              <Anchor.Link
                href="/progetti"
                className="nav-link"
                title="Progetti"
              />

              <Anchor.Link
                href="#footer"
                title="Contatti"
                className="nav-link pr-0"
              />
            </Anchor>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
