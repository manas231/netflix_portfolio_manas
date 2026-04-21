import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "My AI Product Management Journey",
    platform: "Google Blogspot",
    icon: <FaMedium />,
    link: "https://ai-productmananagement.blogspot.com/2026/04/my-ai-product-management-journey.html",
    description: "A blog on the journey toward AI Product Management, exploring the motivation, learning roadmap, and mindset required to break into one of the most future-focused career paths.",
  },
  {
    title: "India vs England 2025 Test Series: A Cricket Analysis",
    platform: "Google Blogspot",
    icon: <FaMedium />,
    link: "https://indiavspakistantoday.blogspot.com/2025/09/india-vs-england-2025-test-series.html",
    description: "An analysis of the 2025 India vs England Test series, highlighting India’s resilient 2-2 draw in a transitional phase after the retirements of Rohit Sharma and Virat Kohli.",
  },
  {
    title: "The Hound Of The Baskervilles - Quench your thirst for Suspense",
    platform: "Google Blogspot",
    icon: <FaDev />,
    link: "https://educationminusboredom.blogspot.com/2023/05/the-hound-of-baskervilles-quench-your.html",
    description: "A review and summary of The Hound of the Baskervilles, highlighting its suspenseful plot, eerie setting, and engaging mystery.",
  },
  {
    title: "Cricket as a Bridge or a Battlefield",
    platform: "Google Blogspot",
    icon: <FaDev />,
    link: "https://indiavspakistantoday.blogspot.com/2025/01/as-bridge-or-battlefield-balancing.html",
    description: "A thought-provoking article on the intersection of cricket, diplomacy, and national sentiment, using India-Pakistan sporting relations to examine how politics influences the spirit of the game.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">Anything and everything I write including Product Management, Cricket Analysis, Book reviews. Few of many are listed below.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
