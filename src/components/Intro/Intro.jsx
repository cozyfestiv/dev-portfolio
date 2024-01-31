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
          <br />
          <span className="intro-title">Software Developer</span>
        </span>
        <p className="intro-p">
          I am a software developer with a background in art and writing.{" "}
        </p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={prof} alt="profile" className="prof-pic" />
    </section>
  );
};

export default Intro;
