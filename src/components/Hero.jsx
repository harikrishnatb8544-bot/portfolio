import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [confetti, setConfetti] = useState([]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate confetti elements
  useEffect(() => {
    const generateConfetti = () => {
      const symbols = ['📊', '📈', '🔬', '💻', '📉', '⚙️', '🎯', '🔍', '📐', '🧮', '💡', '⚡'];
      const newConfetti = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        delay: Math.random() * 30,
        duration: 8 + Math.random() * 4,
        size: 20 + Math.random() * 30,
      }));
      setConfetti(newConfetti);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 30000); // Regenerate every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const narratives = [];

  return (
    <section id="home" className="hero">
      {/* Confetti animation */}
      <div className="confetti-container">
        {confetti.map((conf) => (
          <div
            key={conf.id}
            className="confetti"
            style={{
              left: `${conf.left}%`,
              fontSize: `${conf.size}px`,
              animation: `fall ${conf.duration}s linear ${conf.delay}s infinite`,
              animationDelay: `${conf.delay}s`,
            }}
          >
            {conf.symbol}
          </div>
        ))}
      </div>

      {/* Video background effect - animated gradient waves */}
      <div className="video-animation-layer">
        <div className="wave-animation wave-1"></div>
        <div className="wave-animation wave-2"></div>
        <div className="wave-animation wave-3"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-name">Hari Krishna TB</h1>
        <h2 className="hero-title">Data Science | Machine Learning | Analytics</h2>
        <p className="hero-subtitle">
          Open to Data Science Internships & Full-Time Roles
        </p>
        <button
          className="cta-button"
          onClick={() => handleScroll('contact')}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
