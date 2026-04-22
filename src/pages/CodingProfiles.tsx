import React from "react";
import "./CodingProfiles.css";

const profiles = [
  {
    platform: "LeetCode",
    username: "kumarmanas",
    link: "https://leetcode.com/u/kumarmanas/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    bgColor: "#FFA116",
    textColor: "#000",
    stats: [
      { label: "Problems Solved", value: "200" },
      { label: "Easy", value: "50" },
      { label: "Medium", value: "115" },
      { label: "Hard", value: "35" },
      { label: "Max Streak", value: "51 days" },
      { label: "Badges", value: "4" },
    ],
    highlight: "100 Days Badge 2022 🏆",
    highlightColor: "#FFA116",
  },
  {
    platform: "GeeksForGeeks",
    username: "kumarmanas2119",
    link: "https://geeksforgeeks.org/profile/kumarmanas2119",
    logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    bgColor: "#2F8D46",
    textColor: "#fff",
    stats: [
      { label: "Coding Score", value: "399" },
      { label: "Problems Solved", value: "122" },
      { label: "Institute Rank", value: "416" },
      { label: "Institute", value: "IIITDM Jabalpur" },
    ],
    highlight: "Problem Solver — Bronze Badge 🥉",
    highlightColor: "#2F8D46",
  },
  {
    platform: "CodeChef",
    username: "canehurricane",
    link: "https://codechef.com/users/canehurricane",
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
    bgColor: "#5B4638",
    textColor: "#fff",
    stats: [
      { label: "Rating", value: "1567" },
      { label: "Contests", value: "9" },
      { label: "Best Global Rank", value: "47" },
      { label: "Among", value: "13,000+ participants" },
    ],
    highlight: "Ranked 47 Globally in July Long 2022 🎯",
    highlightColor: "#e67e22",
  },
];

const CodingProfiles: React.FC = () => {
  return (
    <div className="coding-container">
      <h2 className="coding-title">💻 My Coding Profiles</h2>
      <p className="coding-intro">
        Competitive programming journey from 2021-2023 at IIITDM Jabalpur. Solved 300+ problems across platforms using C++.
      </p>
      <div className="coding-grid">
        {profiles.map((profile, index) => (
          <a href={profile.link} key={index} target="_blank" rel="noopener noreferrer" className="coding-card" style={{ "--delay": index * 0.15 + "s" } as React.CSSProperties}>
            <div className="coding-card-header" style={{ background: profile.bgColor }}>
              <img src={profile.logo} alt={profile.platform} className="platform-logo" />
              <div>
                <h3 className="platform-name" style={{ color: profile.textColor }}>{profile.platform}</h3>
                <p className="platform-username" style={{ color: profile.textColor, opacity: 0.8 }}>@{profile.username}</p>
              </div>
            </div>
            <div className="coding-card-body">
              <div className="stats-grid">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="coding-highlight" style={{ borderLeft: "4px solid " + profile.highlightColor }}>
                {profile.highlight}
              </div>
              <div className="view-profile">View Profile →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
