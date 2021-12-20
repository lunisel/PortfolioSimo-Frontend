import { withRouter } from "react-router";
import emailjs from "emailjs-com";
import { useRef } from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { Anchor } from "antd";
import "./footer.css";

const Footer = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    /* emailjs
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
    e.target.reset(); */
  };
  return (
    <div id="footer-main">
      <div className="top-footer-container">
        <div className="container">
          <div className="info-container">
            <h4>CONTATTI</h4>
            <ul className="footer-info">
              <li>luna942008@hotmail.it</li>
              <li>123-456-78</li>
              <li>via enzo ferrari, 12, BO</li>
              <li>
                <BsFacebook className="icons" />
                <BsLinkedin className="icons" />
              </li>
            </ul>
            <p>Informativa sulla privacy</p>
            <p>Informativa sui cookies</p>
          </div>
          <div className="form-container">
            <h4>CHIEDI INFO E PREVENTIVI GRATUITI</h4>
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
              <div className="form-group">
                <input type="text" placeholder="NOME" />
                <input type="text" placeholder="EMAIL" />
                <input type="text" placeholder="OGGETTO" />
              </div>
              <div className="textarea">
                <textarea></textarea>
              </div>
              <button type="submit" className="submit-footer-form-btn">
                INVIA
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom-footer-container">
        <div className="container">
          <p>
            © <span>Risi Graph 2021</span> by Simone Risi
          </p>
          <p>
            Sito creato da <span>Luna Sarmiento</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
