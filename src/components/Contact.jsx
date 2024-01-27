import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <h1 id="contactId">Contact</h1>
      <p>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {/* <form>
        <label for="fname">Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Email</label>
        <input
          type="email"
          id="lname"
          name="lastname"
          placeholder="Your email"
        />

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." />

        <input type="submit" value="Send Message" />
      </form> */}
    </div>
  );
}
