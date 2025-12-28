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
        
        // Helper function to calculate position on a smooth curved path using quadratic bezier curve
        const getPointOnCurve = (progress, fromX, fromY, toX, toY) => {
          // Control point for the curve - creates a smooth wave-like path
          // The control point is offset to create a natural curved trajectory
          const midX = (fromX + toX) / 2;
          const midY = (fromY + toY) / 2;
          
          // Offset control point perpendicular to the line
          const dx = toX - fromX;
          const dy = toY - fromY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Create a smooth curve by offsetting the control point
          const offsetFactor = distance * 0.3;
          const perpX = -dy / distance * offsetFactor;
          const perpY = dx / distance * offsetFactor;
          
          const controlX = midX + perpX;
          const controlY = midY + perpY;
          
          // Quadratic bezier formula: B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2
          const t = progress;
          const mt = 1 - t;
          const x = mt * mt * fromX + 2 * mt * t * controlX + t * t * toX;
          const y = mt * mt * fromY + 2 * mt * t * controlY + t * t * toY;
          
          return { x, y };
        };
        
        // Animation sequence: 2 round trips with smooth curved paths
        let tripCount = 0; // 0 = first trip out, 1 = first trip back, 2 = second trip out, 3 = second trip back
        const legDuration = 800; // 800ms per leg (medium speed)
        
        const animateLeg = (currentTime, startAnimTime) => {
          const elapsed = currentTime - startAnimTime;
          const progress = Math.min(elapsed / legDuration, 1);
          
          let fromX, fromY, toX, toY, fromRotation, toRotation;
          
          // Determine current leg direction
          if (tripCount === 0 || tripCount === 2) {
            // Going out: start -> contact
            fromX = startX;
            fromY = startY;
            toX = endX;
            toY = endY;
            fromRotation = 45;
            toRotation = -20;
          } else {
            // Coming back: contact -> start
            fromX = endX;
            fromY = endY;
            toX = startX;
            toY = startY;
            fromRotation = -20;
            toRotation = 45;
          }
          
          // Get position on smooth curved path
          const curvePoint = getPointOnCurve(progress, fromX, fromY, toX, toY);
          const currentRotation = fromRotation + (toRotation - fromRotation) * progress;
          
          setRocketState(prev => ({
            ...prev,
            x: curvePoint.x,
            y: curvePoint.y,
            rotation: currentRotation,
          }));
          
          if (progress < 1) {
            requestAnimationFrame((time) => animateLeg(time, startAnimTime));
          } else {
            // Leg complete, check if we need another leg
            if (tripCount < 3) {
              // More legs to go
              tripCount++;
              requestAnimationFrame((time) => animateLeg(time, time));
            } else {
              // All legs complete, end beside Contact title
              setRocketState(prev => ({
                ...prev,
                landed: true,
                x: endX,
                y: endY,
              }));
              setIsAnimating(false);
            }
          }
        };
        
        requestAnimationFrame((time) => animateLeg(time, time));
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
