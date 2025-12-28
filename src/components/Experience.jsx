import React from 'react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'PariTechSoft',
      year: '2024',
      achievements: [
        'Built React-based UIs',
        'Collaborated with backend teams',
        'Improved UX performance'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      {/* Sparkle animations for experience cards */}
      <div className="experience-sparkles">
        <div className="experience-sparkle"></div>
        <div className="experience-sparkle"></div>
        <div className="experience-sparkle"></div>
      </div>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-year">{exp.year}</p>
              </div>
              <p className="experience-company">{exp.company}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
