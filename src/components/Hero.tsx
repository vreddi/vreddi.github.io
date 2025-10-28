import { useState } from 'react';
import './Hero.css';

export const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-section">
            {!imageError ? (
              <img 
                src="/assets/me.jpeg" 
                alt="Vishrut Reddi" 
                className="profile-pic"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="profile-pic-placeholder">VR</div>
            )}
            <span className="profile-name">Vishrut Reddi--</span>
          </div>
          
          <h1 className="hero-title">
            Developer from<br />
            <span className="location">
              Seattle, WA
              <span className="highlight"></span>
            </span>
          </h1>
          
          <p className="hero-description">
            A tireless developer that works against the clock<br />
            to squeeze as much learning into a day,
          </p>
          
          <button className="cta-button">
            VIEW RESUME
          </button>
        </div>
        
        <div className="hero-right">
          <div className="illustration-container">
            <div className="illustration-placeholder">
              <div className="floating-element element-1">💻</div>
              <div className="floating-element element-2">🎸</div>
              <div className="floating-element element-3">⚡</div>
              <div className="character">
                <img 
                  src="/assets/1380f2d5-60aa-41ed-ac02-819bb0c7406b.JPG" 
                  alt="Hero" 
                  className="character-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M12 19l-7-7M12 19l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

