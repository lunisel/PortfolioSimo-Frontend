import { Button, Col, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router";

const Footer = () => {
    const sendEmail = () => {

    }
  return (
    <div className="footer-big-container">
      <Row>
        <Col xs={12} md={3}>
          <h4 className="footer-titles">Contatti</h4>
        </Col>

        <Col xs={12} md={3}>
          <h4 className="footer-titles">Pagine</h4>
        </Col>

        <Col xs={12} md={2}>
          <h4 className="footer-contact-us">Contact us</h4>
        </Col>

        <Col xs={12} md={4}>
          <Form className="footer-form-container" onSubmit={sendEmail}>
              <Form.Group>
                  <Form.Control type="text" placeholder="Name" name="name" className="footer-inputs"/>
              </Form.Group>
              <Form.Group>
                  <Form.Control type="email" placeholder="Email" name="email" className="footer-inputs"/>
              </Form.Group>
              <Form.Group>
                  <Form.Control type="text" placeholder="Subject" name="subject" className="footer-inputs"/>
              </Form.Group>
              <Form.Group>
                  <textarea className="form-control footer-inputs" id="message" rows="3" placeholder="Your message..." name="message"></textarea>
              </Form.Group>
              <Button type="submit">Submit Form</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Footer);
