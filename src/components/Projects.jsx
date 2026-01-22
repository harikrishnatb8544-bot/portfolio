import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Customer Trust Score Engine',
      description: 'Customer trust and churn risk prediction engine for Telecom and SaaS domains using behavioral feature engineering and machine learning.',
      stages: ['💡 Design', '🔨 Build', '✅ Test', '🚀 Deploy'],
      impact: 'Improved customer retention strategy',
      github: 'https://github.com/harikrishnatb8544-bot/Customer-Trust-Score-Engine'
    },
    {
      id: 2,
      title: 'Credit Risk Scoring System',
      description: 'Loan default prediction for FinTech use cases.',
      stages: ['💡 Design', '🔨 Build', '✅ Test', '🚀 Deploy'],
      impact: 'Reduced financial risk',
      github: ''
    },
    {
      id: 3,
      title: 'Sales Forecasting',
      description: 'Time series-based demand and sales forecasting.',
      stages: ['💡 Design', '🔨 Build', '✅ Test', '🚀 Deploy'],
      impact: 'Optimized inventory decisions',
      github: ''
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <p className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </p>

              <div className="project-actions">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-button github-button"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
