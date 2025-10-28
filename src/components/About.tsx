import { useState } from 'react';
import './About.css';

export const About = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            A tireless developer that works against the clock to<br />
            squeeze as much learning into a day,
          </p>
          
          <p className="about-bio">
            I have explored software development and web development<br />
            very early into my life. At the age of 15, I explored DOS<br />
            operating system, in high school I taught myself Java to
          </p>
        </div>
        
        <div className="about-image-container">
          <div className="about-title-overlay">About Me</div>
          {!imageError ? (
            <img 
              src="/assets/me.jpeg" 
              alt="About Me" 
              className="about-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="about-image-placeholder">
              <span>Your Photo Here</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

