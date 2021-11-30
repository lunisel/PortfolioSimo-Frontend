import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo-risigraph.png";
import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <img src={logo} alt="logo" className="nav-logo" />
        <Navbar.Brand href="/"> <span className="risi-brand-nav">Risi </span>Graph</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="nav-links-container">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/progetti">Progetti</Nav.Link>
              <Nav.Link href="#contatti">Contatti</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
