import React from "react";
import "./ProjectsPage.css";

const ProjectsPage: React.FC = () => {
  const artist = {
    name: "BigXThaPlug",
    bio: "BigXthaPlug is an emerging force in the rap scene, known for his raw, unapologetic lyrics and commanding presence on the mic. Hailing from Dallas, Texas, he quickly gained attention with hard-hitting tracks like “Texas,” “Whip It,” “Levels,” and “Mmhmm,” each showcasing his unique blend of Southern rap traditions with modern hip-hop energy. His music reflects his life experiences, offering gritty storytelling paired with powerful beats and memorable hooks. BigXthaPlug has also made waves through collaborations with notable artists such as Shaboozey, Offset, and NLE Choppa, further cementing his place as one of the most exciting new voices in the rap game.",
    albums: [
      {
        title: "Meet The 6ixers",
        releaseDate: "January 15, 2022",
        songs: [
          "Meet the 6ixers",
          "Rap Niggas Pt. 2 by BigXthaPlug & Ro$ama",
          "Steppa Music by Ro$ama",
          "Hell Yea by BigXthaPlug & Ro$ama",
          "Dirty Dawg by Yung Hood",
          "Baccstreet by Yung Hood & Ro$ama",
          "Havin Freestyle by BigXthaPlug & Yung Hood",
          "The Finals",
        ],
        albumCover: "src/images/MEEt6ixers.jpeg", // Placeholder for the album cover
      },
      {
        title: "The Biggest",
        releaseDate: "March 20, 2023",
        songs: [
          "Back On My BS",
          "Climate by BigXthaPlug & Offset",
          "Mmhmm",
          "'02 Lakers (Ft. Ro$ama)",
          "Rock & Roll",
          "Patience",
          "Mmhmm (Remix) by BigXthaPlug & Finesse2Tymes",
        ],
        albumCover: "src/images/albumCoverTwo.jpg", // Placeholder for the album cover
      },
      {
        title: "Take Care",
        releaseDate: "July 5, 2024", // Release date added
        songs: [
          "Take Care",
          "Lost The Love",
          "Change Me",
          "Leave Me Alone",
          "Therapy Session",
          "Planting Seeds",
          "Words from WALLO267",
          "Law & Order",
          "Back On My BS",
          "2AM",
          "Story of X",
          "The Largest",
          "Mmhmm",
          "Rich Off Rap",
          "They Don't Know",
        ],
        albumCover: "src/images/albumCoverThree.jpg", // Placeholder for the album cover
      },
      // Add more albums as needed
    ],
    image: "src/images/bigXThaPlugImage.jpg", // Placeholder for artist image
  };

  return (
    <div className="projects-page">
      <h1 className="artist-name">{artist.name}</h1>
      <div className="artist-image">
        <img src={artist.image} alt={`${artist.name}`} />
      </div>
      <p className="artist-bio">{artist.bio}</p>
      <h2 className="albums-title">Albums</h2>
      <div className="albums-list">
        {artist.albums.map((album, index) => (
          <div className="album-card" key={index}>
            <div className="album-cover">
              <img src={album.albumCover} alt={`${album.title} cover`} />
            </div>
            <h3 className="album-name">{album.title}</h3>
            <p className="release-date">Release Date: {album.releaseDate}</p> {/* Displaying release date */}
            <h4 className="song-list-title">Tracklist:</h4>
            <ul className="song-list">
              {album.songs.map((song, songIndex) => (
                <li key={songIndex}>{song}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
