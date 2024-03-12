import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/cube-white.png";
import mobileLogo from "../../assets/small-white.png";
import { Link } from "react-scroll";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <Link
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="logo-link"
          >
            <img src={logo} alt="Logo" className="logo" />
            <img src={mobileLogo} alt="Logo" className="mobile-logo" />
          </Link>
        </div>
        <ul className="desktop-menu">
          <li className="desktop-menu-list-item">
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="desktop-menu-list-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Stack
            </Link>
          </li>
          <li className="desktop-menu-list-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
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
            to="contact"
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
    </header>
  );
}
