import React from 'react';
import './Projects.css';
import { FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiGoogleanalytics } from 'react-icons/si';
import { MdProductionQuantityLimits, MdCampaign } from 'react-icons/md';

const techIcons: { [key: string]: JSX.Element } = {
  'C++': <SiCplusplus />,
  'Python': <FaPython />,
  'Java': <FaJava />,
  'Product Management': <MdProductionQuantityLimits />,
  'Go-to-Market': <MdCampaign />,
  'Content Strategy': <MdCampaign />,
  'Google Analytics': <SiGoogleanalytics />,
  'GitHub': <FaGithub />,
};

const projectsData = [
  {
    title: 'Patent — Hybrid Additive Manufacturing Apparatus',
    description: 'Led the conceptualization and development of a novel tooling system for hybrid additive manufacturing, addressing the critical challenge of material re-solidification during printing. By leveraging friction-based intervention, the solution improved structural integrity, enhanced process efficiency, and enabled complex geometry fabrication. This project reflects a strong problem-first approach, combining user needs, engineering feasibility, and innovation to deliver a high-impact solution.',
    techUsed: ['Process Optimization', 'Problem Identification & RCA','Product Thinking & Solution Design'],
    image: 'https://depenning.com/wp-content/uploads/2024/11/Provisional-patent-1-copy.webp',
    link: 'https://drive.google.com/file/d/1leQusKWTEJ23m0hNkwC2twsGgUSXtC-r/view?usp=sharing',
    badge: '🏆 Patent Holder',
  },
  {
    title: 'CAT Test Series — Testbook',
    description: 'Drove the 0→1 launch of a CAT test series at Testbook, starting from market research and competitor analysis to product design and go-to-market execution. Identified demand gaps and user needs, created 1500+ questions, and structured 500+ tests aligned with exam trends. Collaborated cross-functionally with the marketing team to shape GTM strategy, positioning, and user acquisition campaigns, driving a scalable and user-centric learning product.',
    techUsed: ['0→1 Product Development', 'Market Research & Competitor Analysis','Product Design & Content Structuring','Go-to-Market (GTM) Strategy'],
    image: 'https://play-lh.googleusercontent.com/oZKb4MS_3fA2URqyMW2QvWqm7Bhjikz_L8002o4VLpIfVUmcVXZUa1OI0r5QS_8b3XA',
    link: 'https://testbook.com/cat-test-series-coaching',
    badge: '🚀 Launched from Scratch',
  },
  {
    title: 'Influencer Marketing Campaign — UGC NET/JRF',
    description: 'Drove influencer-led growth for UGC NET/JRF by identifying niche creators aligned with target user segments. Curated and onboarded influencers, developed campaign scripts, and collaborated cross-functionally on creatives. Managed end-to-end partnerships including outreach, negotiation, and execution to support user acquisition and product visibility.',
    techUsed: ['Influencer & Partnership Development', 'Content Strategy', 'Go-to-Market Execution','Cross-functional Collaboration'],
    image: 'https://lawsikho.com/blog/wp-content/uploads/2025/12/Untitled-design-41.png',
    link: null,
    badge: '📈 Growth Campaign',
  },
 
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              {project.badge && (
                <span style={{
                  background: '#e50914',
                  color: 'white',
                  padding: '2px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  display: 'inline-block'
                }}>
                  {project.badge}
                </span>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || '🔧'} {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#e50914', marginTop: '8px', display: 'inline-block' }}>
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;