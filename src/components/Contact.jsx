import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [rocketState, setRocketState] = useState({
    show: false,
    landed: false,
    x: 0,
    y: 0,
    rotation: 45,
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const contactTitleRef = useRef(null);
  const rocketRef = useRef(null);

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
        const endY = rect.top + rect.height / 2 - 15; // vertically centered, adjusted for icon size
        
        // Start position: bottom-right off screen
        const startX = window.innerWidth + 50;
        const startY = window.innerHeight + 50;
        
        setRocketState(prev => ({
          ...prev,
          show: true,
          landed: false,
          x: startX,
          y: startY,
          rotation: 45,
        }));
        
        // Animate rocket using requestAnimationFrame
        let startTime = null;
        const animateDuration = 1000; // 1 second
        
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / animateDuration, 1);
          
          // Easing function: ease-in-out
          const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;
          
          const currentX = startX + (endX - startX) * easeProgress;
          const currentY = startY + (endY - startY) * easeProgress;
          const currentRotation = 45 + (-20 - 45) * easeProgress;
          
          setRocketState(prev => ({
            ...prev,
            x: currentX,
            y: currentY,
            rotation: currentRotation,
          }));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Animation complete, mark as landed
            setRocketState(prev => ({
              ...prev,
              landed: true,
              x: endX,
              y: endY,
            }));
            setIsAnimating(false);
          }
        };
        
        requestAnimationFrame(animate);
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
          ref={rocketRef}
          className={`rocket-launcher ${rocketState.landed ? 'landed' : 'animating'}`}
          style={{
            left: `${rocketState.x}px`,
            top: `${rocketState.y}px`,
            transform: `rotate(${rocketState.rotation}deg)`,
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
