import React, { useState } from "react";
import emailValidator from "../utils/emailValidator";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name)
      setErrors((errors) => ({ ...errors, name: "Name is required." }));
    if (!formData.email)
      setErrors((errors) => ({ ...errors, email: "Email is required." }));
    else if (!emailValidator(formData.email))
      setErrors((errors) => ({ ...errors, email: "Invalid email address." }));
    if (!formData.message)
      setErrors((errors) => ({ ...errors, message: "Message is required." }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((errors) => ({ ...errors, [name]: `${name} is required.` }));
    } else {
      setErrors((errors) => ({ ...errors, [name]: "" }));
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
            onChange={handleChange}
            onBlur={handleBlur}
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
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <div>{errors.email}</div>}
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            id="message"
            name="message"
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <div>{errors.message}</div>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
