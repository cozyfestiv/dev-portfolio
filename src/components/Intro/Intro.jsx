import React from "react";
import "./intro.css";
import prof from "../../assets/profile-vert.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro" className="intro-block">
      <div className="intro-content">
        <span className="hello">Hi,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Greg</span>
        </span>
        <p className="intro-p">
          <span className="intro-title">I'm a Software Developer</span> <br />{" "}
          with a background in art and writing. My mission is to write
          sustainable code for the health of our planet and the people on it.{" "}
        </p>
        {/* <Link>
          <button className="btn">Hire Me</button>
        </Link> */}
      </div>
      <img src={prof} alt="profile" className="prof-pic" />
    </section>
  );
};

export default Intro;
