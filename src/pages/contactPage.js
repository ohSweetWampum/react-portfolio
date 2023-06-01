import React, { useState } from "react";
import emailValidator from "../utils/emailValidator";
import "../styles/contact.css";

// This function defines the Contact form component
export default function Contact() {
  // Initialize form data and form error states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // Handle input changes and update the state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks for each field and update error state if validation fails
    if (!formData.name)
      setErrors((errors) => ({ ...errors, name: "Name is required." }));
    if (!formData.email)
      setErrors((errors) => ({ ...errors, email: "Email is required." }));
    else if (!emailValidator(formData.email))
      setErrors((errors) => ({ ...errors, email: "Invalid email address." }));
    if (!formData.message)
      setErrors((errors) => ({ ...errors, message: "Message is required." }));
  };

  // Handle input blur events for field validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((errors) => ({ ...errors, [name]: `${name} is required.` }));
    } else {
      setErrors((errors) => ({ ...errors, [name]: "" }));
    }
  };

  // Return the JSX for the Contact form
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
