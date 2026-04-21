import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const ProfileBanner: React.FC = () => {

  const handlePlayClick = () => {
    window.open('https://drive.google.com/file/d/1S89KTVi4iN2fiVK5HjKSJITz3J63NNzm/view?usp=sharing', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/kumar-manas-557319148/', '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>Kumar Manas</h1>
        <p className="banner-description">
         Product Manager Intern @ Jubilant Ingrevia | MBA Candidate @ SCMHRD Pune | Ex-Testbook SME| Mechanical Engineer, IIIT Jabalpur | Patent Holder | 99.98%ile SNAP | Building towards AI Product Management
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;