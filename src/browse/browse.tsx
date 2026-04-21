import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import redImage from '../images/red.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Recruiter",
      image: blueImage,
      backgroundGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTRidjJ4OHg4czZ1dHp3MTB5ZHM3Mmg4ODRscHJiM3gwbXg1amd0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6heBQSjt2IoA8/giphy.gif" // Dark storm clouds
    },
    {
      name: "curious mind",
      image: redImage,
      backgroundGif: "https://media.tenor.com/cfdARq561WIAAAAM/evil-hands.gif" // Dark, abstract digital lights
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
