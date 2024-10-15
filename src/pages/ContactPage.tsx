import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.mobile.match(/^[0-9]{10}$/)) {
      newErrors.mobile = "Mobile number must be 10 digits";
      valid = false;
    }
    if (!formData.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button>Submit</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: BigXThaPlug@gmail.com</p>
        <p>Phone: 123-456-7890</p>
        <p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>{" "}
          |
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            {" "}
            X
          </a>{" "}
          |
          <a
            href="mailto:BigXThaPlug@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Email
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
