import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction',
      description: 'Predict customers likely to churn in Telecom / SaaS domains.',
      stages: ['💡 Design', '🔨 Build', '✅ Test', '🚀 Deploy'],
      impact: 'Improved customer retention strategy'
    },
    {
      id: 2,
      title: 'Credit Risk Scoring System',
      description: 'Loan default prediction for FinTech use cases.',
      stages: ['💡 Design', '🔨 Build', '✅ Test', '🚀 Deploy'],
      impact: 'Reduced financial risk'
    },
    {
      id: 3,
      title: 'Sales Forecasting',
      description: 'Time series-based demand and sales forecasting.',
      stages: ['💡 Design', '🔨 Build', '✅ Test', '🚀 Deploy'],
      impact: 'Optimized inventory decisions'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
