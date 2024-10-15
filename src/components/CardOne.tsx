// CardOne.tsx
import React from 'react';
import './OneStyle.css'; // Ensure the correct path for the CSS file

interface CardProps {
    content: string; // Prop for content
    imgSrc: string; // Prop for image source
}

const CardOne: React.FC<CardProps> = ({ content, imgSrc }) => {
    return (
        <div>
            <img src={imgSrc} alt="Card Image" className="card-image" />
            <div className="card-inner">
                {content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};


export default CardOne;
