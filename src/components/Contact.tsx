import './Contact.css';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="contact-socials-grid">
          <div className="contact-social-card">
            <img src="/assets/linkedin.png" alt="LinkedIn" className="social-logo" />
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/vishrutreddi" target="_blank" rel="noopener noreferrer">
              @vishrutreddi
            </a>
          </div>

          <div className="contact-social-card">
            <img src="/assets/github.png" alt="GitHub" className="social-logo" />
            <h3>GitHub</h3>
            <a href="https://github.com/vreddi" target="_blank" rel="noopener noreferrer">
              @vreddi
            </a>
          </div>

          <div className="contact-social-card">
            <div className="social-icon-large">𝕏</div>
            <h3>X (Twitter)</h3>
            <a href="https://x.com/vishrutreddi" target="_blank" rel="noopener noreferrer">
              @vishrutreddi
            </a>
          </div>

          <div className="contact-social-card">
            <img src="/assets/youtube.png" alt="YouTube" className="social-logo" />
            <h3>YouTube</h3>
            <a href="https://www.youtube.com/@VishrutReddi" target="_blank" rel="noopener noreferrer">
              @VishrutReddi
            </a>
          </div>

          <div className="contact-social-card">
            <img src="/assets/instagram.gif" alt="Instagram" className="social-logo" />
            <h3>Instagram</h3>
            <a href="https://instagram.com/vishrutreddi" target="_blank" rel="noopener noreferrer">
              @vishrutreddi
            </a>
          </div>

          <div className="contact-social-card">
            <img src="/assets/soundcloud.png" alt="SoundCloud" className="social-logo" />
            <h3>SoundCloud</h3>
            <a href="https://soundcloud.com/jastner" target="_blank" rel="noopener noreferrer">
              @jastner
            </a>
          </div>

          <div className="contact-social-card">
            <img src="/assets/spotify.gif" alt="Spotify" className="social-logo" />
            <h3>Spotify</h3>
            <a href="https://open.spotify.com/user/12146102142?si=abcd47932fa34419" target="_blank" rel="noopener noreferrer">
              Vishrut Reddi
            </a>
          </div>
        </div>

        {/* 
        // COMMENTED OUT - Contact Form (to be implemented later)
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/vishrutreddi" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/vishrutreddi
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/vishrutreddi" target="_blank" rel="noopener noreferrer">
                  github.com/vishrutreddi
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Seattle, WA</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6}
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        */}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Vishrut Reddi. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/vishrutreddi" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/vishrutreddi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@VishrutReddi" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

