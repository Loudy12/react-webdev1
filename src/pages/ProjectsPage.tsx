import React from "react";
import "./ProjectsPage.css";

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      {/* Artist Image */}
      <div className="artist-image">
        <img src="src/images/BIGXimg2.jpg" alt="BigXThaPlug" />
      </div>

      {/* Artist Name and Bio */}
      <h1 className="artist-name">BigXThaPlug</h1>
      <p className="artist-bio">
      BigXThaPlug is a rising force in the rap scene, recognized for his raw, unapologetic lyrics and commanding stage presence. Hailing from Dallas, Texas, he quickly made waves with powerful tracks like "Texas," "Whip It," "Levels," and "Mmhmm," each blending Southern rap roots with a fresh, modern hip-hop energy. His music draws deeply from his life experiences, delivering gritty storytelling over hard-hitting beats and unforgettable hooks. Through collaborations with artists like Shaboozey, Offset, and NLE Choppa, BigXThaPlug continues to solidify his reputation as one of the most electrifying new voices in hip-hop.
      </p>

      {/* Albums Section */}
      <h2 className="albums-title">Albums</h2>
      <div className="albums-list">
        <div className="album-card">
          <a 
            href="https://open.spotify.com/album/4eRm5B4jHC8zJhQizo15w5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-cover"
          >
            <img src="src/images/MEEt6ixers.jpeg" alt="Meet The 6ixers Album Cover" />
          </a>
          <h3 className="album-name">Meet The 6ixers</h3>
          <p className="release-date">Release Date: January 15, 2024</p>
          <h4 className="song-list-title">Tracklist:</h4>
          <ul className="song-list">
            <li>Meet the 6ixers</li>
            <li>Rap Niggas Pt. 2 by BigXthaPlug & Ro$ama</li>
            <li>Steppa Music by Ro$ama</li>
            <li>Hell Yea by BigXthaPlug & Ro$ama</li>
            <li>Dirty Dawg by Yung Hood</li>
            <li>Baccstreet by Yung Hood & Ro$ama</li>
            <li>Havin Freestyle by BigXthaPlug & Yung Hood</li>
            <li>The Finals</li>
          </ul>
        </div>

        <div className="album-card">
          <a 
            href="https://open.spotify.com/album/2EZ8JL3dtb54VXi3k6E7k6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-cover"
          >
            <img src="src/images/THEBIGGEST.jpeg" alt="The Biggest Album Cover" />
          </a>
          <h3 className="album-name">The Biggest</h3>
          <p className="release-date">Release Date: March 20, 2023</p>
          <h4 className="song-list-title">Tracklist:</h4>
          <ul className="song-list">
            <li>Back On My BS</li>
            <li>Climate by BigXthaPlug & Offset</li>
            <li>Mmhmm</li>
            <li>'02 Lakers (Ft. Ro$ama)</li>
            <li>Rock & Roll</li>
            <li>Patience</li>
            <li>Mmhmm (Remix) by BigXthaPlug & Finesse2Tymes</li>
          </ul>
        </div>

        <div className="album-card">
          <a 
            href="https://open.spotify.com/album/6LU7SYL9BWAt3TgEK4DdAc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-cover"
          >
            <img src="src/images/TAKECARECOVER.jpeg" alt="Take Care Album Cover" />
          </a>
          <h3 className="album-name">Take Care</h3>
          <p className="release-date">Release Date: July 5, 2024</p>
          <h4 className="song-list-title">Tracklist:</h4>
          <ul className="song-list">
            <li>Take Care</li>
            <li>Lost The Love</li>
            <li>Change Me</li>
            <li>Leave Me Alone</li>
            <li>Therapy Session</li>
            <li>Planting Seeds</li>
            <li>Words from WALLO267</li>
            <li>Law & Order</li>
            <li>Back On My BS</li>
            <li>2AM</li>
            <li>Story of X</li>
            <li>The Largest</li>
            <li>Mmhmm</li>
            <li>Rich Off Rap</li>
            <li>They Don't Know</li>
          </ul>
        </div>
      </div>

      {/* Spotify Link Section */}
      <div className="spotify-link">
        <a href="https://open.spotify.com/artist/6qxpnaukVayrQn6ViNvu9I" target="_blank" rel="noopener noreferrer">
          <img src="src/images/spotify.png" alt="Listen on Spotify" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
