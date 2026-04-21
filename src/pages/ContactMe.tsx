import React from "react";
import "./ContactMe.css";
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from "react-icons/fa";

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <div className="badge-avatar" style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#e50914", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", color: "white", fontWeight: "bold", flexShrink: 0 }}>
          KM
        </div>
        <div className="badge-content">
          <h3 className="badge-name">Kumar Manas</h3>
          <p className="badge-title">Aspiring Product Manager | MBA @ SCMHRD Pune</p>
          <p className="badge-description">Patent holder, 99.98 percentile SNAP scorer, and product enthusiast. Currently interning as a Product Manager at Jubilant Ingrevia. B.Tech from IIITDM Jabalpur. Open to PM, growth, and strategy roles.</p>
          <p className="badge-company">SCMHRD, Symbiosis International University</p>
          <a href="https://www.linkedin.com/in/kumar-manas-557319148/" target="_blank" rel="noopener noreferrer" className="badge-link">
            <FaLinkedin className="linkedin-icon" /> View LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I am always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:Kumarmanas2119@gmail.com" className="contact-link">Kumarmanas2119@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+916205237508" className="contact-link">+91 62052 37508</a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
