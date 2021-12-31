import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const FormStyle = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kaa3sz9",
        "template_iqair8r",
        form.current,
        "user_w2ziz2qbvfXU6HhpyqDIg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setName("");
      setEmail("");
      setMessage("");
  };

  return (
    <FormStyle>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </FormStyle>
    // <FormStyle>
    //   <form ref={form} onSubmit={sendEmail}>
    //     <div className="form-group">
    //       <label>Your Name</label>
    //       <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
    //       <label>Your Email</label>
    //       <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
    //       <label>Your Message</label>
    //       <textarea name="message" onChange={(e) => setMessage(e.target.value)}/>
    //     </div>
    //     <button type="submit" value="Send">
    //       Send{" "}
    //     </button>
    //   </form>
    // </FormStyle>
  );
}
