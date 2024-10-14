import React from 'react';
import Card from '../components/CardOne'; // Ensure the import path is correct

function AboutMe() {
  return (
    <div>
      <div>
        <h1>About Me</h1>
        <p>
          Hi! I'm a software engineer who loves to code. I'm passionate about building web applications and learning new technologies.
        </p>
      </div>
      <div>
        <h1>My App</h1>
        <Card imageSrc="src\images\BigXimg.jpeg" /> {/* Pass the image source */}
      </div>
    </div>
  );
}

export default AboutMe;
