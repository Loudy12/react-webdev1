import React from 'react';
import CardOne from '../components/CardOne'; // Make sure to import your card component

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! I'm a software engineer who loves to code. I'm passionate about building web applications and learning new technologies.
      </p>
      <div className="card-container">
        <div className="card card1">
          <CardOne content="Live" imgSrc="src/images/BigXimg.jpeg" />
        </div>
        <div className="card card2">
          <CardOne content="Laugh" imgSrc="src/images/BigXimg2.jpg" />
        </div>
        <div className="card card3">
          <CardOne content="Love" imgSrc="src/images/BIGXimg3.jpg" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
