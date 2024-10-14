import React from 'react';
import './OneStyle.css'; // Make sure the CSS path is correct

interface CardProps {
  imageSrc: string; // New prop for the image source
}

function Card(props: CardProps) {
  const { imageSrc } = props; // Destructure props to get imageSrc

  return (
    <div className="card">
      <div className="card-overlay"></div>
      <div className="card-inner">
        <img src={imageSrc} alt="Card content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default Card;
