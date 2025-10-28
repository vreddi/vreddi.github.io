import './Projects.css';

export const Projects = () => {
  /* 
  // COMMENTED OUT - Project Grid (to be used later)
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/assets/project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Mobile app development with React Native",
      tags: ["React Native", "Firebase", "TypeScript"],
      image: "/assets/project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "AI-powered web application using machine learning",
      tags: ["Python", "TensorFlow", "Flask"],
      image: "/assets/project3.jpg",
      link: "#"
    }
  ];
  */

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <div className="coming-soon-container">
          <div className="coming-soon-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <h2 className="coming-soon-title">Featured Projects</h2>
          <p className="coming-soon-subtitle">Coming Soon</p>
          <p className="coming-soon-description">
            I'm currently curating and documenting my best work.<br />
            Check back soon to see what I've been building.
          </p>
        </div>

        {/* 
        // COMMENTED OUT - Project Grid
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <span>📱</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

