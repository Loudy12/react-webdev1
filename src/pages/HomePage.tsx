import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="profile-picture">
        <img src="src/images/profilePicBigX.jpg" alt="Profile" />
      </div>

      <h1 className="name">BigXThaPlug</h1>
      <p className="bio">
        {/*This description was written by ChatGPT*/}
        Welcome to the coding portfolio of BigXThaPlug—where creativity flows as
        smoothly in code as it does in music. When I’m not laying down beats,
        I’m laying down clean, efficient code, making sure your apps run like a
        well-oiled machine. Whether it’s building responsive web apps, tuning
        backends for peak performance, or crafting user interfaces that hit
        harder than my 808s, I bring the same energy and precision to
        development as I do to my music. If you need a project to flow
        seamlessly, from concept to launch, I’m your go-to plug for turning
        ideas into reality.
      </p>

      <div className="social-links">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/images/github.png" alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/images/twitter.png" alt="Twitter" />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/images/email.png" alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
