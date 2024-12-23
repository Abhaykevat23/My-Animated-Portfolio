import React, { useEffect } from 'react';
import './ShootingStarsSVG.css';

const ShootingStarsSVG = () => {
    const bubbleCount = 20; // Number of floating boxes (bubbles)

    // Generate random properties for the bubbles (size, speed, delay)
    const generateBubbles = () => {
      return Array.from({ length: bubbleCount }, (_, index) => ({
        id: `bubble-${index}`,
        size: Math.random() * 50 + 20 + 'px', // Random size between 20px and 70px
        delay: Math.random() * 5 + 's', // Random delay
        duration: Math.random() * 5 + 3 + 's', // Random speed between 3s and 8s
        left: Math.random() * 100 + '%', // Random horizontal position
        animationDuration: Math.random() * 5 + 5 + 's', // Random animation duration
        opacity: Math.random() * 0.5 + 0.5, // Random opacity
      }));
    };
  
    const bubbles = generateBubbles();

  return (
    <div className="floating-bubbles">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
            opacity: bubble.opacity,
            color:"rgb(15, 195, 255)",
            filter:"drop-shadow(0 0 20px rgb(15, 195, 255))"
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStarsSVG;
