import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x99xm98",
        "template_hy7voil",
        form.current,
        "g95sq1gRnu4K9Hv0D"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent! Thanks!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1 className="section-title">Contact Me</h1>
      <span className="contact-text">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </span>
      <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="user_name"
          pattern="[A-Za-z]+"
          title="Only letters are allowed"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="user_email"
          required
        />
        <textarea
          name="message"
          id=""
          rows="5"
          className="msg"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="submit-btn" value="Send">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
