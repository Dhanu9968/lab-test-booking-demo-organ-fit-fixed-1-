
import React from "react";
import {
  Target, Eye, HeartHandshake, ShieldCheck,
  Microscope, Users, Award, ArrowRight
} from "lucide-react";
import "./Pages.css";

function About({ setPage }) {
  return (
    <div className="site-page">
      <header className="site-header">
        <div className="site-logo" onClick={() => setPage("landing")}>
          <span className="site-logo-icon">✚</span>
          <span>LAB TEST<br />BOOKING</span>
        </div>

        <nav className="site-nav">
          <button onClick={() => setPage("landing")}>Home</button>
          <button className="active" onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("contact")}>Contact Us</button>
          <button onClick={() => setPage("tests")}>Explore Tests</button>
        </nav>

        <button className="site-header-btn" onClick={() => setPage("tests")}>
          Book Now <ArrowRight size={16} />
        </button>
      </header>

      <section className="site-about-hero">
        <div>
          <span className="site-eyebrow">GET TO KNOW US</span>
          <h1>Committed to Better Health Through Accurate Diagnostics</h1>
          <p>
            We aim to make the diagnostic test booking experience easier,
            clearer, and more convenient for everyone.
          </p>
          <button className="site-primary-btn" onClick={() => setPage("tests")}>
            Explore Our Tests <ArrowRight size={18} />
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1000&auto=format&fit=crop&q=85"
          alt="Medical laboratory professional working with diagnostic equipment"
        />
      </section>

      <section className="site-about-intro">
        <div className="site-about-photo">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e?auto=format&fit=crop&w=900&q=80"
            alt="Laboratory testing equipment"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=80";
            }}
          />
        </div>
        <div className="site-about-copy">
          <span className="site-eyebrow">WHO WE ARE</span>
          <h2>Making Healthcare Access More Convenient</h2>
          <p>
            Lab Test Booking is designed to simplify the process of finding
            and booking diagnostic tests. Our platform helps users explore
            health categories, review available tests, enter patient details,
            and select a convenient appointment schedule.
          </p>
          <p>
            We believe that a smooth booking experience can help people take
            timely steps towards understanding and managing their health.
          </p>
          <button className="site-text-btn" onClick={() => setPage("tests")}>
            Start Exploring <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="site-purpose-section">
        <article className="site-purpose-card">
          <div className="site-purpose-icon"><Target /></div>
          <h3>Our Mission</h3>
          <p>
            To make diagnostic test booking accessible and convenient through
            a simple, user-friendly digital experience.
          </p>
        </article>
        <article className="site-purpose-card">
          <div className="site-purpose-icon"><Eye /></div>
          <h3>Our Vision</h3>
          <p>
            To support a healthier community by encouraging awareness,
            convenience, and timely health screening.
          </p>
        </article>
        <article className="site-purpose-card">
          <div className="site-purpose-icon"><HeartHandshake /></div>
          <h3>Our Values</h3>
          <p>
            We value trust, clarity, accessibility, innovation, and a
            patient-first approach in every interaction.
          </p>
        </article>
      </section>

      <section className="site-values-section">
        <div className="site-section-heading">
          <span className="site-eyebrow">OUR COMMITMENT</span>
          <h2>What Makes Our Platform Useful?</h2>
          <p>Designed around a clear and convenient booking journey.</p>
        </div>
        <div className="site-benefit-grid">
          <article><Microscope /><h3>Test Discovery</h3><p>Browse different health categories and related tests.</p></article>
          <article><ShieldCheck /><h3>Clear Information</h3><p>Review test details and indicative prices before booking.</p></article>
          <article><Users /><h3>Patient-Friendly</h3><p>Enter patient information through a guided form.</p></article>
          <article><Award /><h3>Convenient Journey</h3><p>Choose a date and time through the booking flow.</p></article>
        </div>
      </section>

      <section className="site-team-section">
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1000&auto=format&fit=crop&q=85"
          alt="Healthcare team working together"
        />
        <div>
          <span className="site-eyebrow">PATIENT-CENTRED EXPERIENCE</span>
          <h2>Designed Around Your Health Journey</h2>
          <p>
            From exploring tests to completing your appointment details,
            every step is designed to be clear and easy to follow.
          </p>
          <ul>
            <li>Simple test discovery</li>
            <li>Organized booking cart</li>
            <li>Easy patient details entry</li>
            <li>Convenient appointment scheduling</li>
          </ul>
          <button className="site-primary-btn" onClick={() => setPage("tests")}>
            Book a Test <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <div><strong>✚ LAB TEST BOOKING</strong><p>Making diagnostic test booking simpler and more convenient.</p></div>
        <div><strong>Quick Links</strong><button onClick={() => setPage("landing")}>Home</button><button onClick={() => setPage("about")}>About Us</button><button onClick={() => setPage("contact")}>Contact Us</button></div>
        <div><strong>Our Services</strong><p>Health Categories</p><p>Diagnostic Tests</p><p>Online Booking</p></div>
      </footer>
    </div>
  );
}

export default About;
