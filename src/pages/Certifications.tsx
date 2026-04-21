import React from "react";
import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { MdStar } from "react-icons/md";

const certificationsData = [
  { title: "What Can AI Do for Marketing?", issuer: "Coursera", issuedDate: "2025", link: "https://drive.google.com/file/d/1az2KXf5eFUqECz-OKfHMNlMdKwCJ4K4d/view?usp=sharing", icon: React.createElement(SiCoursera) },
  { title: "Programming in Java", issuer: "NPTEL", issuedDate: "2023", link: "https://drive.google.com/file/d/1qPjS_Yny0qQCy2k8KNUlPWvcmmdLUOPl/view?usp=sharing", icon: React.createElement(FaUniversity) },
  { title: "The Joy of Computing using Python", issuer: "NPTEL", issuedDate: "2022", link: "https://drive.google.com/file/d/139ieymirfyPrj-ZpVw6ViNQ9J1OyXQwS/view?usp=sharing", icon: React.createElement(FaUniversity) },
  { title: "Patent — Hybrid Additive Manufacturing", issuer: "Government of India — Patent Office", issuedDate: "2023", link: "https://drive.google.com/file/d/1leQusKWTEJ23m0hNkwC2twsGgUSXtC-r/view?usp=sharing", icon: React.createElement(MdStar) },
  { title: "SNAP 2024 — 99.98 Percentile", issuer: "Symbiosis International University", issuedDate: "2025", link: "https://drive.google.com/file/d/1qeX62f46AHfRzUQT4KSeOptM3vfAGlUP/view?usp=sharing", icon: React.createElement(MdStar) },
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ "--delay": index * 0.2 + "s" } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
