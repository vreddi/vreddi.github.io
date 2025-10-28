import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-section">
            <div className="profile-pic-placeholder">VR</div>
            <span className="profile-name">Vishrut Reddi--</span>
          </div>
          
          <h1 className="hero-title">
            Developer from<br />
            <span className="location">
              Seattle
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
            {/* You can replace this with a 3D model using Spline or an illustration */}
            <div className="illustration-placeholder">
              <div className="floating-element element-1">💻</div>
              <div className="floating-element element-2">🎨</div>
              <div className="floating-element element-3">⚡</div>
              <div className="character">
                <div className="character-body"></div>
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

