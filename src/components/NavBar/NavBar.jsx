import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/cube-white.png";
import mobileLogo from "../../assets/small-white.png";
import { Link } from "react-scroll";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
        <img src={mobileLogo} alt="Logo" className="mobile-logo" />
      </div>
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktop-menu-list-item"
        >
          Stack
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktop-menu-list-item"
        >
          Projects
        </Link>
        {/* <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktop-menu-list-item"
        >
          Clients
        </Link> */}
      </div>
      <button
        className="desktop-menu-btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src="" alt="" className="desktop-menu-img" /> Contact Me
      </button>
      <i
        className="fas fa-bars burger"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="mobile-menu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Stack
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        {/* <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link> */}
        <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
