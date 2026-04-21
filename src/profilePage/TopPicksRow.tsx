import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'curious mind';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: "https://jofibostorage.blob.core.windows.net/blog/skills-for-resume.jpg", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://t3.ftcdn.net/jpg/18/42/39/98/360_F_1842399864_SiMcaWS7CTEvkUidSnQtpTpJyuaAH1ub.jpg", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
  ],
  'curious mind': [
    { title: "Reading List", imgSrc: "https://fastly.picsum.photos/id/832/5000/3333.jpg?hmac=hFHyNp_cIcOMyxpCcTWRd_UM1QEHUyxu4PYl1l7c_fk", icon: <FaBook />, route: "/reading" },
    { title: "Blogs", imgSrc: "https://fastly.picsum.photos/id/486/3409/5000.jpg?hmac=1cAnmyih0Is_jGyd7R8vHTCb1sVMeM6fr0gGIJ50meo", icon: <FaEnvelope />, route: "/blogs" },
    { title: "Music", imgSrc: "https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4", icon: <FaCertificate />, route: "/music" },
    { title: "Coding Profile", imgSrc: "https://picsum.photos/seed/achievements/250/200", icon: <FaCode />, route: "/coding" },
    { title: "Contact Me", imgSrc: "https://fastly.picsum.photos/id/816/5000/3333.jpg?hmac=_6tgFk0XUBO6-wQJnifC-Abqh5W_hu-4lPGN_2d8Sn4", icon: <FaEnvelope />, route: "/contact-me" },


  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile] || topPicksConfig['recruiter'];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;