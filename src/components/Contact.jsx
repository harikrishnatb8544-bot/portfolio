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
  const animationFrameRef = useRef(null);

  // Helper: Calculate rotation angle based on curve direction
  const getRotationForCurve = (currentPoint, nextPoint) => {
    const dx = nextPoint.x - currentPoint.x;
    const dy = nextPoint.y - currentPoint.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 45; // +45 because emoji is already tilted
    return angle;
  };

  // Helper: Get point on cubic bezier curve with proper control points
  const getPointOnCurve = (t, p0, p1, p2, p3) => {
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;

    const x = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
    const y = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;

    return { x, y };
  };

  // Helper: Smooth easing function (ease-in-out cubic)
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    const handleRocketLaunch = () => {
      // Prevent multiple simultaneous animations
      if (isAnimating) return;

      setIsAnimating(true);

      // Get Contact title position with scroll offset
      if (contactTitleRef.current) {
        const rect = contactTitleRef.current.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // End position: right of the text, vertically centered
        const endX = rect.left + rect.width + 10; // 10px gap to the right
        const endY = rect.top + rect.height / 2 - 15; // vertically centered

        // Start position: right side of screen (within viewport), slightly above bottom-right
        const startX = window.innerWidth - 40; // Keep within viewport right edge
        const startY = window.innerHeight - 150;

        // Control points for cubic bezier curve
        // Creates a natural inward-then-curve-to-target path
        const cp1X = window.innerWidth - 300; // First control point: move inward
        const cp1Y = window.innerHeight - 350; // Higher up
        const cp2X = (startX + endX) / 2 + 50; // Second control point: smooth approach
        const cp2Y = endY - 200; // Create smooth approach

        setRocketState(prev => ({
          ...prev,
          show: true,
          landed: false,
          x: startX,
          y: startY,
          rotation: 45,
        }));

        // Animation parameters
        const animationDuration = 1400; // 1400ms for medium-smooth speed
        let animationStartTime = null;

        const animate = (currentTime) => {
          if (!animationStartTime) animationStartTime = currentTime;
          const elapsed = currentTime - animationStartTime;
          const progress = Math.min(elapsed / animationDuration, 1);

          // Apply easing to progress
          const easedProgress = easeInOutCubic(progress);

          // Get current position on cubic bezier curve
          const currentPoint = getPointOnCurve(
            easedProgress,
            { x: startX, y: startY },
            { x: cp1X, y: cp1Y },
            { x: cp2X, y: cp2Y },
            { x: endX, y: endY }
          );

          // Get next point slightly ahead for smooth rotation calculation
          const nextProgress = Math.min(easedProgress + 0.01, 1);
          const nextPoint = getPointOnCurve(
            nextProgress,
            { x: startX, y: startY },
            { x: cp1X, y: cp1Y },
            { x: cp2X, y: cp2Y },
            { x: endX, y: endY }
          );

          // Calculate rotation based on curve direction
          const rotation = getRotationForCurve(currentPoint, nextPoint);

          setRocketState(prev => ({
            ...prev,
            x: currentPoint.x,
            y: currentPoint.y,
            rotation: rotation,
          }));

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate);
          } else {
            // Animation complete, land beside Contact title
            setRocketState(prev => ({
              ...prev,
              landed: true,
              x: endX,
              y: endY,
              rotation: -20,
            }));
            setIsAnimating(false);
          }
        };

        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('launchRocket', handleRocketLaunch);
    return () => {
      window.removeEventListener('launchRocket', handleRocketLaunch);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
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
