import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => (
  <footer className="footer">
    <div id="contact-links" >
      <div className="icon-links">
        <a href="mailto:ncfranklin14@gmail.com" target="_blank"><AiOutlineMail /></a>
      </div>
      <div className="icon-links">
        <a href="https://github.com/ncfranklin14" target="_blank"><AiOutlineGithub /></a>
      </div>
      <div className="icon-links">
        <a href="https://www.linkedin.com/in/nicole-franklin-8a6001a1/" target="_blank"><AiOutlineLinkedin /></a>
      </div>
    </div>
  </footer>
);


export default Footer;