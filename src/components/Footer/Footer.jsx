import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-links">
        <i className="fab fa-linkedin social-link"></i>
        <i className="fab fa-github social-link"></i>
        <i className="far fa-file social-link"></i>
      </div>
      <div className="copyright-text">© 2024 Greg Topscher | MIT License</div>
    </section>
  );
};

export default Footer;
