
import React, { useState } from "react";
import { SiteFooter } from "./Home";
import "./Pages.css";

export default function Contact({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="website">
      <nav className="site-navbar">
        <div className="site-brand">✚ Lab Test Booking System</div>
        <div className="site-links">
          <button onClick={() => setPage("landing")}>Home</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("contact")}>Contact Us</button>
          <button onClick={() => setPage("tests")}>Explore Tests</button>
        </div>
        <button className="site-book-btn"
          onClick={() => setPage("tests")}>
          Book Your Tests →
        </button>
      </nav>

      <section className="site-page-banner">
        <span className="site-eyebrow">WE ARE HERE TO HELP</span>
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <section className="site-contact-layout">
        <div className="site-contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions about our booking system?</p>
          <div>📞 Phone: Add your contact number</div>
          <div>✉️ Email: Add your support email</div>
          <div>📍 Address: Add your organization address</div>
        </div>

        <form className="site-contact-form"
          onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({...form, name:e.target.value})}
            required />

          <input type="email" placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({...form, email:e.target.value})}
            required />

          <textarea rows="5" placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({...form, message:e.target.value})}
            required />

          <button className="site-book-btn" type="submit">
            Send Message →
          </button>
        </form>
      </section>

      <SiteFooter setPage={setPage} />
    </div>
  );
}
