import React, { useState, useEffect } from "react";

import emailValidator from "../utils/emailValidator";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (!name)
      setErrors((errors) => ({ ...errors, name: "Name is required." }));
    if (!email)
      setErrors((errors) => ({ ...errors, email: "Email is required." }));
    else if (!emailValidator(email))
      setErrors((errors) => ({ ...errors, email: "Invalid email address." }));
    if (!message)
      setErrors((errors) => ({ ...errors, message: "Message is required." }));
  }, [name, email, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.name && !errors.email && !errors.message) {
      console.log(
        "Form is valid. Name: ",
        name,
        " Email: ",
        email,
        " Message: ",
        message
      );
    }
  };

  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            id="message"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <div>{errors.message}</div>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
