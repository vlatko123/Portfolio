import React from "react";
import "../Components/Contact.css";
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Contact = () => {
  return (
  <div className="social-link-wrapper">
     <a className="anchor" id="contact"></a>
      <ul>
          <li className="social-link" ><a href="https://www.linkedin.com/in/vlatko-bogojevski/" target="_blank"><FaLinkedin /></a></li>
          <li className="social-link" ><a href="https://github.com/vlatko123" target="_blank"><FaGithubSquare /></a></li>
          <li className="social-link" ><a href="https://www.facebook.com/profile.php?id=100004691987062" target="_blank"><FaFacebookSquare /></a></li>
          <li className="social-link" ><a href="https://www.instagram.com/vlatko_bogojevski_/" target="_blank"><FaInstagramSquare /></a></li>

      </ul>
     
  </div>
  )
};

export default Contact;
