import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import kumarLogo from './images/kumar-logo.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const audio = new Audio(netflixSound);
      audio.play().catch(error => console.error("Audio play error:", error));
      setIsClicked(true);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isClicked) {
      const navTimer = setTimeout(() => {
        navigate('/browse');
      }, 3000);
      return () => clearTimeout(navTimer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container">
      <img
        src={kumarLogo}
        alt="Kumar Manas"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;