import { useState } from 'react';
import './About.css';

export const About = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I'm a <b>Principal Software Engineer</b> at <img src="/assets/microsoft.png" alt="Microsoft" className="inline-logo" /> <b>Microsoft</b>, where I architect the UX for{' '}
            <a href="https://www.microsoft.com/en-us/security/business/microsoft-intune" target="_blank" rel="noopener noreferrer" className="about-link">Microsoft Intune</a>. My job is to make a big, complicated product feel
            straightforward - clear patterns, accessible interfaces, and code paths teams can trust.
            I care about naming things well, writing tests that matter, and leaving the repo cleaner
            than I found it.
          </p>

          <p className="about-description">
            I started building early and never really stopped. These days I split
            time between hands-on work, mentoring, and shaping architecture so others
            can move faster without surprises. I prefer honest conversations over clever fixes,
            and I write things down so decisions don't disappear.
          </p>

          <p className="about-description">
            When I'm off the clock, I reset with guitars and horror movies. I play more than I
            should, collect more than I planned, and I'm always chasing a new tone - or a good scare.
          </p>
          
        </div>
        
        <div className="about-image-container">
          <div className="about-title-overlay">About Me</div>
          {!imageError ? (
            <img 
              src="/assets/IMG_0221.JPG" 
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

