import React from 'react';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
import emailIcon from '../assets/email-icon.png'

const Footer = () => (
  <footer className="footer">
            <address>
                <a href="mailto:ncfranklin14@gmail.com"><img alt="email logo" src={emailIcon} width='50'/></a>
                <a href="https://github.com/ncfranklin14" target="_blank"><img alt="Github logo" src={github} width='50'/></a>
                <a href="https://www.linkedin.com/in/nicole-franklin-8a6001a1/" target="_blank"><img alt="LinkedIn logo" src={linkedIn} width='50'/></a>
            </address>
  </footer>
);

export default Footer;