import React, { useRef } from 'react';

export default function Contact() {
  const contactTitleRef = useRef(null);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" ref={contactTitleRef}>Contact</h2>
        <div className="contact-content">
          <p className="contact-intro">
            Let's connect! Reach out to discuss opportunities or collaborations.
          </p>
          <div className="contact-links">
            <a
              href="mailto:harikrishnatb8544@gmail.com"
              className="contact-link"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">harikrishnatb8544@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hari-krishna-tb-1a9772304"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/hari-krishna-tb-1a9772304</span>
            </a>
            <div className="contact-link">
              <span className="contact-label">Location</span>
              <span className="contact-value">Bengaluru, India</span>
            </div>
            <a
              href="tel:+919632768544"
              className="contact-link"
            >
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91 9632768544</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
