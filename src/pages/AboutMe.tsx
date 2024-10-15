import React from 'react';
import CardOne from '../components/CardOne'; // Import the CardOne component
import '../components/OneStyle.css'; // Ensure the correct path for the CSS file

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! I'm a software engineer who loves to code. I'm passionate about building web applications and learning new technologies.
      </p>
      <div className="card-container">
        {/* Row 1: Larger card (left) and small placeholder (right) */}
        <div className="card small card1">
          <CardOne content="Live" imgSrc="src/images/BigXimg.jpeg" />
        </div>
        <div className="card large placeholder card4">
          <CardOne content="Placeholder" imgSrc="" />
        </div>

        {/* Row 2: Small placeholder (left) and larger card (right) */}
        <div className="card large placeholder card5">
          <CardOne content="I was deep in the game, laying down beats and living that music life. One day, my laptop crashed, and I ain't got the cash to fix it. So, I said, “Forget that! I’ll learn to do it myself.” I dove into coding, and it was like finding a hidden flow. I started slinging lines of code instead of lyrics. React was my front-end hustle, and Node.js became my back-end grind. Now, I’m a full-stack developer, creating fire web apps that hit harder than my tracks. I turned struggle into skill, and now I'm running this tech game." imgSrc="" />
        </div>
        <div className="card small card2">
          <CardOne content="Laugh" imgSrc="src/images/BigXimg2.jpg" />
        </div>

        {/* Row 3: Larger card (left) and small placeholder (right) */}
        <div className="card small card3">
          <CardOne content="Love" imgSrc="src/images/BIGXimg3.jpg" />
          
        </div>
        <div className="card large placeholder card6">
          <CardOne content="Placeholder" imgSrc="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
