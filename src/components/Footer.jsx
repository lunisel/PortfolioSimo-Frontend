import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import emailjs from "emailjs-com";
import { useRef } from "react";
import {BsInstagram, BsFacebook, BsLinkedin} from "react-icons/bs"

const Footer = () => {
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
    <div className="footer-big-container">
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <h4 className="footer-titles">Contatti</h4>
            <p className="footer-contacts">
              email@example.com
            </p>
            <p className="footer-contacts">
              123 456 7890
            </p>
            <BsInstagram/>
            <BsFacebook/>
            <BsLinkedin/>
          </Col>

          <Col xs={12} md={2}>
            <h4 className="footer-titles">Pagine</h4>
            <ul>
              <li className="footer-links">Home</li>
              <li className="footer-links">Progetti</li>
              <li className="footer-links">Prezzi</li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="footer-contsct-us-cont">
            <div className="contact-us-info-cont">
              <h4 className="footer-titles">Scrivimi</h4>
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
