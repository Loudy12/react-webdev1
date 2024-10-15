import React from "react"; // Importing React library
import "./ProjectsPage.css"; // Importing the CSS file for styling the Projects page

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page"> {/* Main container for the Projects page */}
      <div className="artist-image">
        <img src="src/images/bigXThaPlugImage.jpg" alt="BigXThaPlug" /> {/* Artist image */}
      </div>

      <h1 className="artist-name">BigXThaPlug</h1> {/* Artist name heading */}
      <p className="artist-bio">
        // Artist biography with a brief description of their background and music style
        BigXthaPlug is an emerging force in the rap scene, known for his raw, unapologetic lyrics and commanding presence on the mic. Hailing from Dallas, Texas, he quickly gained attention with hard-hitting tracks like "Texas," "Whip It," "Levels," and "Mmhmm," each showcasing his unique blend of Southern rap traditions with modern hip-hop energy. His music reflects his life experiences, offering gritty storytelling paired with powerful beats and memorable hooks. BigXthaPlug has also made waves through collaborations with notable artists such as Shaboozey, Offset, and NLE Choppa, further cementing his place as one of the most exciting new voices in the rap game.
      </p>

      <h2 className="albums-title">Albums</h2> {/* Heading for the albums section */}
      <div className="albums-list"> {/* Container for the list of albums */}
        
        {/* Album card for "Meet The 6ixers" */}
        <div className="album-card">
          <a 
            href="https://open.spotify.com/album/4eRm5B4jHC8zJhQizo15w5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-cover" // Link to the album on Spotify
          >
            <img src="src/images/MEEt6ixers.jpeg" alt="Meet The 6ixers Album Cover" /> {/* Album cover image */}
          </a>
          <h3 className="album-name">Meet The 6ixers</h3> {/* Album name heading */}
          <p className="release-date">Release Date: January 15, 2022</p> {/* Release date */}
          <h4 className="song-list-title">Tracklist:</h4> {/* Heading for the tracklist */}
          <ul className="song-list"> {/* Unordered list for the song titles */}
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

        {/* Album card for "The Biggest" */}
        <div className="album-card">
          <a 
            href="https://open.spotify.com/album/2EZ8JL3dtb54VXi3k6E7k6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-cover"
          >
            <img src="src/images/THEBIGGEST.jpeg" alt="The Biggest Album Cover" /> {/* Album cover image */}
          </a>
          <h3 className="album-name">The Biggest</h3> {/* Album name heading */}
          <p className="release-date">Release Date: March 20, 2023</p> {/* Release date */}
          <h4 className="song-list-title">Tracklist:</h4> {/* Heading for the tracklist */}
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

        {/* Album card for "Take Care" */}
        <div className="album-card">
          <a 
            href="https://open.spotify.com/album/6LU7SYL9BWAt3TgEK4DdAc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="album-cover"
          >
            <img src="src/images/TAKECARECOVER.jpeg" alt="Take Care Album Cover" /> {/* Album cover image */}
          </a>
          <h3 className="album-name">Take Care</h3> {/* Album name heading */}
          <p className="release-date">Release Date: July 5, 2024</p> {/* Release date */}
          <h4 className="song-list-title">Tracklist:</h4> {/* Heading for the tracklist */}
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
    </div>
  );
};

export default ProjectsPage; // Exporting the ProjectsPage component
