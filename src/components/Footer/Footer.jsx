import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/gtop/" target="_blank">
          <i className="fab fa-linkedin social-link"></i>
        </a>

        <a href="https://github.com/cozyfestiv" target="_blank">
          <i className="fab fa-github social-link"></i>
        </a>

        <a href="src/assets/Greg-Topscher-Resume.pdf" target="_blank">
          <i className="far fa-file social-link"></i>
        </a>
      </div>
      <div className="copyright-text">© 2024 Greg Topscher | MIT License</div>
    </section>
  );
};

export default Footer;
