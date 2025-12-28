import React from 'react';

export default function Skills() {
  const skills = [
    'Python',
    'Machine Learning',
    'SQL',
    'Data Analysis',
    'EDA',
    'Feature Engineering',
    'Analytical Thinking',
    'ML'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-sparkle"></div>
              <div className="skill-sparkle-2"></div>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
