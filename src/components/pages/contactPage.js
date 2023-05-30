import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" required />
        </label>
        <label htmlFor="message">
          Message:
          <textarea id="message" name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
