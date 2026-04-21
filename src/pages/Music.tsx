import React from 'react';
import './Music.css';
import albumCover1 from '../images/room.png'; // Hotel California by The Eagles
import albumCover2 from '../images/bapu.png'; // Back in Black by AC/DC
import albumCover3 from '../images/hills.png'; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = ["Hip-Hop / Rap", "Punjabi Beats", "Lo-fi / Chill", "Bollywood Bangers", "Old-school Rock"];
const favoriteAlbums = [
  { title: "Highest in the Room", artist: "Travis Scott", imgSrc: albumCover1 },
  { title: "Bapu Zimidar", artist: "Jassi Gill", imgSrc: albumCover2 },
  { title: "The Hills", artist: "The Weeknd", imgSrc: albumCover3 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Music is something I turn to after every minor inconvenience.” 🎸</p>
      </div>

      <div className="genre-section">
        <h3>My Fav Music Genres</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
