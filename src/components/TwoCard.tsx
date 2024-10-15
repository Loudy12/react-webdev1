import React from 'react';
import './DosStyling.css'; 

interface TwoCardProps {
    title: string;
    content: string;
}

const TwoCard: React.FC<TwoCardProps> = ({ title, content }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
};

export default TwoCard;
