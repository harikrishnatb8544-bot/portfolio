import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [rocketState, setRocketState] = useState({
    show: false,
    landed: false,
    startX: window.innerWidth,
    startY: window.innerHeight,
    endX: 0,
    endY: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const contactTitleRef = useRef(null);

  useEffect(() => {
    const handleRocketLaunch = () => {
      // Prevent multiple simultaneous animations
      if (isAnimating) return;
      
      setIsAnimating(true);
      
      // Get Contact title position
      if (contactTitleRef.current) {
        const rect = contactTitleRef.current.getBoundingClientRect();
        
        // Calculate landing position: right of the text, vertically centered
        const endX = rect.left + rect.width + 20; // 20px to the right of text
        const endY = rect.top + rect.height / 2; // vertically centered
        
        setRocketState(prev => ({
          ...prev,
          show: true,
          landed: false,
          startX: window.innerWidth + 50,
          startY: window.innerHeight + 50,
          endX: endX,
          endY: endY,
        }));
        
        // After animation completes, mark as landed (keep visible)
        setTimeout(() => {
          setRocketState(prev => ({
            ...prev,
            landed: true,
          }));
          setIsAnimating(false);
        }, 1000); // 1000ms animation duration
      }
    };

    window.addEventListener('launchRocket', handleRocketLaunch);
    return () => window.removeEventListener('launchRocket', handleRocketLaunch);
  }, [isAnimating]);

  return (
    <section id="contact" className="contact">
      {/* Dynamic rocket animation */}
      {rocketState.show && (
        <div 
          className={`rocket-launcher ${rocketState.landed ? 'landed' : 'animating'}`}
          style={{
            '--start-x': `${rocketState.startX}px`,
            '--start-y': `${rocketState.startY}px`,
            '--end-x': `${rocketState.endX}px`,
            '--end-y': `${rocketState.endY}px`,
          }}
        >
          <div className="rocket-icon">🚀</div>
        </div>
      )}

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
