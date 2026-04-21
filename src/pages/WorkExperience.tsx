import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const timelineData = [
  {
    timelineType: 'work',
    title: 'Product Manager Intern',
    name: 'Jubilant Ingrevia',
    techStack: 'Product Management, Market Research, Stakeholder Management',
    summaryPoints: 'Owning end-to-end product lifecycle from pre-sales business proposal and R&D feasibility to scale-up, commercial launch, and ongoing business management through cross-functional collaboration.',
    dateRange: 'April 2026 – June 2026',
  },
   {
    timelineType: 'education',
    title: 'MBA — Sales & Marketing',
    name: 'SCMHRD, Symbiosis International University, Pune',
    techStack: '',
    summaryPoints: 'Pursuing MBA with specialisation in Sales & Marketing. Scored 99.98 Percentile in SNAP 2024 — Top 20 rank in India among 1.4 lakh+ candidates.',
    dateRange: '2025 – 2027 (Ongoing)',
  },
  {
    timelineType: 'work',
    title: 'Associate SME',
    name: 'Testbook Edu Solutions Pvt. Ltd., Noida',
    techStack: 'Content Strategy, Marketing, Go-to-Market, User Research',
    summaryPoints: 'Launched CAT test series from scratch, created 1500+ questions and finalised 500 tests. Collaborated with marketing on CAT Go-to-Market strategy. Designed content for faculty discussions and student assignments.',
    dateRange: 'Jun 2024 – Apr 2025',
  },
  {
    timelineType: 'work',
    title: 'Marketing Intern',
    name: 'Testbook Edu Solutions Pvt. Ltd., Noida',
    techStack: 'Script Writing, Influencer Marketing, UGC Strategy',
    summaryPoints: 'Created promotional scripts and collaborated on graphics for marketing videos. Identified and curated a targeted list of niche influencers for UGC NET/JRF promotions. Conducted on-call discussions with study influencers for collaborations.',
    dateRange: 'May 2025 – Jun 2025',
  },
 
  {
    timelineType: 'education',
    title: 'B.Tech — Mechanical Engineering',
    name: 'IIITDM Jabalpur (Pt. Dwarka Prasad Mishra IIIT, Design & Manufacturing)',
    techStack: '',
    summaryPoints: 'Graduated with 72%. Designed and patented a novel tooling system for Hybrid Additive Manufacturing (Patent Certificate holder). Learned C++, OOP, Python during coursework.',
    dateRange: '2019 – 2023',
  },
  {
    timelineType: 'education',
    title: '12th — Science (CBSE)',
    name: 'Patna Doon Public School, Patna',
    techStack: '',
    summaryPoints: 'Scored 80% in Class 12 Science.',
    dateRange: '2019',
  },
  {
    timelineType: 'education',
    title: '10th — CBSE',
    name: 'Radiant International School, Patna',
    techStack: '',
    summaryPoints: 'Scored 93.1% in Class 10.',
    dateRange: '2017',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === 'work'
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === 'work'
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === 'work'
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === 'work' ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;