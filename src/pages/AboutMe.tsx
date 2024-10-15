import React from 'react';
import CardOne from '../components/CardOne'; 
import '../components/OneStyle.css'; 
import TwoCard from '../components/TwoCard';

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      
      <div className="card-container">
        {/* Row 1: Larger card (left) and small placeholder (right) */}
        <div className="card small card1">
          <CardOne content="Live" imgSrc="src/images/BigXimg.jpeg" />
        </div>
        <div className="card large card4">
          <TwoCard title="Becoming a Full-Stack Dev" content="I was deep in the game, laying down beats and living that music life. One day, my laptop crashed, and I ain't got the cash to fix it. So, I said, “Forget that! I will learn to do it myself.” I dove into coding, and it was like finding a hidden flow. I started slinging lines of code instead of lyrics. React was my front-end hustle, and Node.js became my back-end grind. Now, I’m a full-stack developer, creating fire web apps that hit harder than my tracks. I turned struggle into skill, and now I'm running this tech game." />
        </div>

        
        <div className="card large card5">
        <TwoCard title="Why Full-Stack?" content="I love full-stack development because it gives me control over everything. Front end, back end—it don’t matter, I run it all. It’s like being the producer and the artist at the same time. I get to design how things look and feel, then make sure it all runs smooth behind the scenes. There’s no limits, no waiting on someone else to do their part. I create the vision and bring it to life, start to finish. It’s the same rush I got from making beats, but now it’s code. It’s power, creativity, and freedom all in one."/>
        </div>
        <div className="card small card2">
          <CardOne content="Laugh" imgSrc="src/images/BigXimg2.jpg" />
        </div>

        
        <div className="card small card3">
          <CardOne content="Love" imgSrc="src/images/BIGXimg3.jpg" />
          
        </div>
        <div className="card large  card6">
          <TwoCard title="Goals" content="As a full-stack developer, my goals are simple: build my empire, one line of code at a time. I am trying to create apps that break boundaries, things that people need but don’t even know yet. I want to be the plug for innovation, making sure my tech moves fast, clean, and always ahead of the game. I see myself leading projects that change the game for real, whether it is designing the slickest front end or running the back end like a boss. My aim is to own the space, control my hustle, and make my mark in the tech world." />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
