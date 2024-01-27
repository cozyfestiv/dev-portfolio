import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <span className="contact-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        ullam tempora perferendis amet alias debitis quam quos reiciendis
        dolores beatae!
      </span>
      <form action="" className="contact-form">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          name="message"
          id=""
          rows="5"
          className="msg"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="submit-btn" value="Send">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
