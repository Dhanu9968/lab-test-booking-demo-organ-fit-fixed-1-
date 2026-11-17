
import React from "react";
import {
  ArrowRight, ShieldCheck, Clock3, Headset,
  CalendarCheck, Microscope, Activity, HeartPulse
} from "lucide-react";
import "./Pages.css";

const categories = [
  { name: "Diabetes", desc: "Blood sugar and glucose tests", image: "/images/organs/pancreas.webp" },
  { name: "Liver", desc: "Liver function and health", image: "/images/organs/liver.webp" },
  { name: "Thyroid", desc: "Hormone and thyroid tests", image: "/images/organs/thyroid.webp" },
  { name: "Kidney", desc: "Kidney function tests", image: "/images/organs/kidneys.webp" },
  { name: "Heart", desc: "Cardiac health screening", image: "/images/organs/heart.webp" },
  { name: "Lungs", desc: "Respiratory health tests", image: "/images/organs/lungs.webp" },
  { name: "Bone", desc: "Bone and vitamin health", image: "/images/organs/bone.webp" },
  { name: "Pregnancy", desc: "Maternal health tests", image: "/images/organs/pregnancy.webp" },
  { name: "Cancer", desc: "Screening and detection tests", image: "/images/organs/cancer.webp" },
];

function Home({ setPage }) {
  return (
    <div className="site-page">
      <header className="site-header">
        <div className="site-logo" onClick={() => setPage("landing")}>
          <span className="site-logo-icon">✚</span>
          <span>LAB TEST<br />BOOKING</span>
        </div>

        <nav className="site-nav">
          <button className="active" onClick={() => setPage("landing")}>Home</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("contact")}>Contact Us</button>
          <button onClick={() => setPage("tests")}>Explore Tests</button>
        </nav>

        <button className="site-header-btn" onClick={() => setPage("tests")}>
          Book Now <ArrowRight size={16} />
        </button>
      </header>

      <section className="site-hero">
        <div className="site-hero-content">
          <span className="site-eyebrow">YOUR HEALTH, OUR PRIORITY</span>
          <h1>Better Health Begins With <span>Accurate Testing.</span></h1>
          <p>
            Book your laboratory tests easily, explore health packages,
            and take control of your health with confidence.
          </p>
          <div className="site-hero-actions">
            <button className="site-primary-btn" onClick={() => setPage("tests")}>
              Book Your Tests <ArrowRight size={18} />
            </button>
            <button className="site-outline-btn" onClick={() => setPage("about")}>
              Learn More
            </button>
          </div>
          <div className="site-hero-points">
            <span><ShieldCheck size={17} /> Trusted Testing</span>
            <span><Clock3 size={17} /> Quick Booking</span>
          </div>
        </div>

        <div className="site-hero-image">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&auto=format&fit=crop&q=85"
            alt="Healthcare professional in a modern medical setting"
          />
          <div className="site-floating-card">
            <Activity size={25} />
            <div><strong>Health First</strong><small>Make informed health decisions</small></div>
          </div>
        </div>
      </section>

      <section className="site-trust-strip">
        <div><Microscope /><strong>Modern Diagnostics</strong><span>Quality-focused testing</span></div>
        <div><ShieldCheck /><strong>Reliable Reports</strong><span>Accuracy you can trust</span></div>
        <div><CalendarCheck /><strong>Easy Scheduling</strong><span>Choose a convenient slot</span></div>
        <div><Headset /><strong>Patient Support</strong><span>Help when you need it</span></div>
      </section>

      <section className="site-section">
        <div className="site-section-heading">
          <span className="site-eyebrow">EXPLORE OUR SERVICES</span>
          <h2>Explore by Health Category</h2>
          <p>Select a health category to discover relevant diagnostic tests.</p>
        </div>

        <div className="site-category-grid">
          {categories.map((item) => (
            <button
              className="site-category-card"
              key={item.name}
              onClick={() => setPage("tests")}
            >
              <div className="site-category-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="site-category-info">
                <div><h3>{item.name}</h3><p>{item.desc}</p></div>
                <ArrowRight size={19} />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="site-why-section">
        <div className="site-section-heading">
          <span className="site-eyebrow">WHY CHOOSE US</span>
          <h2>A Simpler Way to Care for Your Health</h2>
          <p>We make the test booking journey simple and convenient.</p>
        </div>
        <div className="site-benefit-grid">
          <article><CalendarCheck /><h3>Easy Booking</h3><p>Explore tests and book appointments in just a few steps.</p></article>
          <article><ShieldCheck /><h3>Quality Focus</h3><p>Make informed decisions with dependable diagnostic services.</p></article>
          <article><Clock3 /><h3>Convenient Scheduling</h3><p>Choose a suitable date and available time slot.</p></article>
          <article><Headset /><h3>Helpful Support</h3><p>Get assistance throughout your booking journey.</p></article>
        </div>
      </section>

      <section className="site-cta">
        <div>
          <span>TAKE A STEP TOWARDS BETTER HEALTH</span>
          <h2>Your Health Deserves Attention.</h2>
          <p>Explore our health categories and start your test booking today.</p>
        </div>
        <button onClick={() => setPage("tests")}>Explore Tests <ArrowRight /></button>
      </section>

      <footer className="site-footer">
        <div><strong>✚ LAB TEST BOOKING</strong><p>Making diagnostic test booking simpler and more convenient.</p></div>
        <div><strong>Quick Links</strong><button onClick={() => setPage("landing")}>Home</button><button onClick={() => setPage("about")}>About Us</button><button onClick={() => setPage("contact")}>Contact Us</button></div>
        <div><strong>Our Services</strong><p>Health Categories</p><p>Diagnostic Tests</p><p>Online Booking</p></div>
      </footer>
    </div>
  );
}

export default Home;
export function SiteFooter({ setPage }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>✚ LAB TEST BOOKING</strong>
        <p>Making diagnostic test booking simpler and more convenient.</p>
      </div>

      <div>
        <strong>Quick Links</strong>
        <button onClick={() => setPage("landing")}>Home</button>
        <button onClick={() => setPage("about")}>About Us</button>
        <button onClick={() => setPage("contact")}>Contact Us</button>
      </div>

      <div>
        <strong>Our Services</strong>
        <p>Health Categories</p>
        <p>Diagnostic Tests</p>
        <p>Online Booking</p>
      </div>
    </footer>
  );
}