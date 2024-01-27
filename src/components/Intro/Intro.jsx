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
          <span className="intro-title">Website Designer</span>
        </span>
        <p className="intro-p">
          I am a skilled web designer with experience creating visually
          appealing and user friendly websites.{" "}
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
