// Reading.tsx

import React from 'react';
import './Reading.css';
import atomicHabits from '../images/final1.jpg';
import richDadPoorDad from '../images/ccm.jpg';
import alchemist from '../images/the22.jpg';
import eatThatFrog from '../images/hound.jpg';


const books = [
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    imgSrc: atomicHabits,
    description: "Build products through rapid experimentation, validated learning, and continuous iteration to minimize risk and maximize success.",
  },
  {
    title: "Copycat Marketing 101",
    author: "Burke Hedges",
    imgSrc: richDadPoorDad,
    description: "Learn from proven competitors and replicate what works instead of reinventing the wheel.",
  },
  {
    title: "The 22 Immutable Laws of Marketing",
    author: "Al Ries and Jack Trout",
    imgSrc: alchemist,
    description: "Marketing success is driven by perception and positioning, not just product quality.",
  },
  {
    title: "Hounds of the Baskervilles",
    author: "Arthur Conan Doyle",
    imgSrc: eatThatFrog,
    description: "Thriller and Suspenses",
  },

 
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth. P.S. Last one is just a book I love.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
