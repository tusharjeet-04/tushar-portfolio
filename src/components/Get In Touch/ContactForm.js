import React from "react";
import "./Contact.css"; // Link the CSS file

// Function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">Submit the form below to get in touch with me</p>
        </div>

        <div className="contact-form-wrapper">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/aejjozwb"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="contact-textarea"
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
