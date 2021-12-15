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
    <div className="big-container" id="footer">
      <div className="container">
        
      </div>
    </div>
  );
};

export default withRouter(Footer);
