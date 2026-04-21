import React from 'react';
import './Skills.css';
import { FaPython, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiNotion, SiGoogleanalytics, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiJira } from 'react-icons/si';
import { MdProductionQuantityLimits, MdCampaign, MdPeople } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';

const skillsData = [
  {
    category: 'Product Management',
    skills: [
      { name: 'AI/ML Fundamentals', icon: <MdProductionQuantityLimits />, description: 'Models, data, prediction, applications' },
      { name: 'User Research', icon: <MdPeople />, description: 'User interviews, feedback loops, persona building' },
      { name: 'Data Analytics', icon: <BsGraphUp />, description: 'Metrics tracking, growth analysis, A/B testing mindset' },
      { name: 'Stakeholder Mgmt', icon: <MdPeople />, description: 'Cross-functional collaboration and alignment' },
    ],
  },
  {
    category: 'Marketing & Growth',
    skills: [
      { name: 'Go-to-Market', icon: <MdCampaign />, description: 'Campaign positioning, GTM strategy for CAT series at Testbook' },
      { name: 'Influencer Marketing', icon: <MdCampaign />, description: 'UGC NET/JRF influencer curation and collaboration' },
      { name: 'Content Strategy', icon: <MdCampaign />, description: 'Script writing, promotional content, faculty material design' },
      { name: 'Google Analytics', icon: <SiGoogleanalytics />, description: 'Web analytics and performance tracking' },
    ],
  },
  {
    category: 'Technical Skills',
    skills: [
      { name: 'C++', icon: <SiCplusplus />, description: 'Object Oriented Programming, data structures' },
      { name: 'Python', icon: <FaPython />, description: 'NPTEL certified — The Joy of Computing using Python' },
      { name: 'SQL', icon: <FaPython />, description: 'Data querying, joins, aggregation, insights' },
      { name: 'DSA', icon: <FaGitAlt />, description: 'Data structures, algorithms, problem solving' },
    ],
  },
  {
    category: 'Tools & Productivity',
    skills: [
      { name: 'MS Excel', icon: <SiMicrosoftexcel />, description: 'Data analysis, reporting and dashboards' },
      { name: 'PowerPoint', icon: <SiMicrosoftpowerpoint />, description: 'Pitch decks, presentations, investor decks' },
      { name: 'Canva', icon: <SiNotion />, description: 'Visual storytelling, design, content creation' },
      { name: 'Jira', icon: <SiJira />, description: 'Agile project management and sprint planning' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;