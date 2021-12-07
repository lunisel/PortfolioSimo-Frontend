import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import emailjs from "emailjs-com";
import { useRef } from "react";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { Anchor } from "antd";

const Footer = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        "service_0nwi6uo",
        "template_zukmulm",
        form.current,
        "user_38iqaz1pzTBAZm2BAMiOv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="footer-big-container" id="footer">
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <h4 className="footer-titles">Contatti</h4>
            <p className="footer-contacts">email@example.com</p>
            <p className="footer-contacts">123 456 7890</p>
            <BsInstagram
              className="icons-footer"
              onClick={() =>
                window.open("https://www.instagram.com/lunisel/?hl=it")
              }
            />
            <BsFacebook
              className="icons-footer"
              onClick={() =>
                window.open("https://www.facebook.com/luna.sarmiento.7")
              }
            />
            <BsLinkedin
              className="icons-footer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/lunisel/")
              }
            />
            <div className="go-up-link-footer">
              <Anchor affix={false}>
                <Anchor.Link href="#navbar" title="Go Back Up" className="go-up"/>
              </Anchor>
            </div>
          </Col>

          <Col xs={12} md={2}>
            <h4 className="footer-titles">Pagine</h4>
            <ul>
              <li
                className="footer-links"
                onClick={() => props.history.push("/")}
              >
                Home
              </li>
              <li
                className="footer-links"
                onClick={() => props.history.push("/progetti")}
              >
                Progetti
              </li>
              <li
                className="footer-links"
                onClick={() => props.history.push("/prezzi")}
              >
                Prezzi
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="footer-contsct-us-cont">
            <div className="contact-us-info-cont">
              <h4 className="footer-contact-us-title">Scrivimi</h4>
              <div className="footer-contact-us-text">
                Hai un progetto di cui vuoi discutere? Hai bisogno di chiarire
                dei dubbi? Riempi il from e ti ricontatterò al più presto!
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} className="footer-form-cont">
            <Form
              className="footer-form-container"
              ref={form}
              onSubmit={(e) => sendEmail(e)}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="footer-inputs"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="footer-inputs"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="footer-inputs"
                />
              </Form.Group>
              <Form.Group>
                <textarea
                  className="form-control footer-inputs"
                  id="message"
                  rows="3"
                  placeholder="Your message..."
                  name="message"
                ></textarea>
              </Form.Group>
              <Button type="submit" className="w-100 submit-footer-form-btn">
                Submit Form
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Footer);
