import "./App.css";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import Career from "./Career";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
       <nav className="navbar"> 
        <div className="nav-container">
          <h2 className="logo">HO ZI LE </h2>
          {/* Hamburger Button */}
          <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#career" onClick={closeMenu}>Career and Education</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1>
            HO ZI LE
          </h1>
          <h2>Software Engineer</h2>

          <p className="hero-description">
            I build web applications and explore software engineering,
            artificial intelligence, and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a
            href="/Resume/resume.pdf"
            target="_blank"
            className="btn secondary"
            >
            View Resume
            </a>
          </div>

          <div className="scroll-hint">
            <span className="scroll-arrow">↓</span>
            <span>Scroll to explore</span>
          </div>

        </div>
      </section>

    <AnimatedSection>
      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <p className="section-label">ABOUT ME</p>
          <h2>Who I Am</h2>

          <div className="about-content">

            {/* Profile Image */}
            <div className="about-image">
              <img src="/Resume/profile.jpeg" alt="Alex Ho" />
            </div>

            {/* Description */}
            <div className="about-text-container">

              <p className="about-text">
                I am a motivated and detail-oriented{" "}
                <strong>Software Engineer</strong> with a strong
                foundation in programming, web development, database management,
                and software development. I primarily work with technologies such
                as <strong>Python, Java, MySQL, Django, and Flutter</strong> to
                build practical and user-friendly applications.
              </p>

              <p className="about-text">
                I also have a growing interest and hands-on experience in{" "}
                <strong>Artificial Intelligence</strong> and{" "}
                <strong>Computer Vision</strong>. I have worked with technologies
                such as <strong>YOLO</strong> and <strong>TensorFlow</strong> to
                develop and experiment with image detection, image classification,
                and computer vision applications.
              </p>

              <p className="about-text">
                I enjoy learning new technologies, solving technical problems, and
                turning ideas into practical projects. I am eager to continue
                developing my skills and contribute to real-world software and
                technology solutions.
              </p>

            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
    <Career />


    <AnimatedSection>
      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <p className="section-label">SKILLS</p>
          <h2>Technical Stack</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Python, Django, REST API</p>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <p>MySQL, SQLite</p>
            </div>

            <div className="skill-card">
              <h3>AI / Machine Learning</h3>
              <p>YOLO, TensorFlow, Computer Vision</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, Docker, VS Code</p>
            </div>

            <div className="skill-card">
              <h3>What's Next?</h3>
              <p><i>Always learning. Always improving.</i></p>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">PROJECTS</p>
          <h2>My Projects</h2>

          <div className="projects-grid">

            {/* =========================
                Accident Detection
            ========================= */}
            <div className="project-card">
              <div className="project-card-inner">

                {/* Front */}
                <div className="project-card-front">
                  <h3>Accident Detection and Reporting System</h3>

                  <p className="project-year">2026</p>

                  <p>
                    An AI-powered traffic accident monitoring and reporting
                    system designed to detect and verify road accidents from
                    real-time video streams.
                  </p>

                  <div className="project-tech">
                    <span>YOLOv8</span>
                    <span>TensorFlow</span>
                    <span>Python</span>
                    <span>Computer Vision</span>
                  </div>

                  <p className="flip-hint">
                    Hover to view details →
                  </p>
                </div>


                {/* Back */}
                <div className="project-card-back">
                  <h3>Project Details</h3>

                  <div className="project-detail-section">
                    <h4>Overview</h4>

                    <p>
                      Developed a two-stage AI system for monitoring,
                      detecting, and verifying traffic accidents from
                      video streams.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <h4>Key Contributions</h4>

                    <ul>
                      <li>
                        Developed an accident detection pipeline using
                        YOLOv8.
                      </li>

                      <li>
                        Built a secondary classification pipeline to
                        reduce false positives.
                      </li>

                      <li>
                        Integrated automated screenshot extraction
                        between detection and classification stages.
                      </li>

                      <li>
                        Performed dataset annotation, preprocessing,
                        model training, and evaluation.
                      </li>
                    </ul>
                  </div>

                  <div className="project-detail-section">
                    <h4>Technical Focus</h4>

                    <div className="project-tech">
                      <span>YOLOv8</span>
                      <span>TensorFlow</span>
                      <span>Python</span>
                      <span>Computer Vision</span>
                    </div>
                  </div>

                  <p className="flip-hint">
                    ← Hover to return
                  </p>
                </div>

              </div>
            </div>


            {/* =========================
                AI Face Condition
            ========================= */}
            <div className="project-card">
              <div className="project-card-inner">

                {/* Front */}
                <div className="project-card-front">
                  <h3>AI Face Condition Checking System</h3>

                  <p className="project-year">2026</p>

                  <p>
                    An AI-powered mobile application for facial skin
                    condition analysis and personalized skincare
                    recommendations.
                  </p>

                  <div className="project-tech">
                    <span>Flutter</span>
                    <span>Django</span>
                    <span>YOLOv8</span>
                    <span>OpenCV</span>
                  </div>

                  <p className="flip-hint">
                    Hover to view details →
                  </p>
                </div>


                {/* Back */}
                <div className="project-card-back">
                  <h3>Project Details</h3>

                  <div className="project-detail-section">
                    <h4>Overview</h4>

                    <p>
                      Developed a mobile application that combines
                      computer vision and AI models to analyze facial
                      skin conditions and provide personalized
                      skincare recommendations.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <h4>Key Contributions</h4>

                    <ul>
                      <li>
                        Developed the Flutter mobile application and
                        Django backend.
                      </li>

                      <li>
                        Trained custom YOLOv8 models for acne and
                        pigmentation detection.
                      </li>

                      <li>
                        Implemented a multi-stage AI pipeline for
                        detection, skin type classification, health
                        scoring, and severity assessment.
                      </li>

                      <li>
                        Developed RESTful APIs for image uploads,
                        AI inference, scan history, and recommendations.
                      </li>

                      <li>
                        Used OpenCV to generate annotated prediction
                        images with bounding boxes and confidence scores.
                      </li>
                    </ul>
                  </div>

                  <div className="project-detail-section">
                    <h4>Technical Focus</h4>

                    <div className="project-tech">
                      <span>Flutter</span>
                      <span>Django</span>
                      <span>YOLOv8</span>
                      <span>OpenCV</span>
                      <span>MySQL</span>
                    </div>
                  </div>

                  <p className="flip-hint">
                    ← Hover to return
                  </p>
                </div>

              </div>
            </div>


            {/* =========================
                Property Management
            ========================= */}
            <div className="project-card">
              <div className="project-card-inner">

                {/* Front */}
                <div className="project-card-front">
                  <h3>Property Listing Management System</h3>

                  <p className="project-year">2025</p>

                  <p>
                    A Django-based real estate platform for managing,
                    organizing, and displaying large volumes of
                    property listings.
                  </p>

                  <div className="project-tech">
                    <span>Django</span>
                    <span>Python</span>
                    <span>MySQL</span>
                    <span>REST API</span>
                  </div>

                  <p className="flip-hint">
                    Hover to view details →
                  </p>
                </div>


                {/* Back */}
                <div className="project-card-back">
                  <h3>Project Details</h3>

                  <div className="project-detail-section">
                    <h4>Overview</h4>

                    <p>
                      Developed a centralized real estate platform
                      for managing, organizing, and displaying
                      property listing data.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <h4>Key Contributions</h4>

                    <ul>
                      <li>
                        Developed a property listing platform for
                        managing and displaying real estate data.
                      </li>

                      <li>
                        Built an admin dashboard for creating,
                        updating, and organizing property listings.
                      </li>

                      <li>
                        Designed structured backend models for
                        property records and categorization.
                      </li>

                      <li>
                        Improved listing management workflows through
                        a centralized system.
                      </li>

                      <li>
                        Focused on scalability and usability for
                        handling large volumes of property data.
                      </li>
                    </ul>
                  </div>

                  <div className="project-detail-section">
                    <h4>Technical Focus</h4>

                    <div className="project-tech">
                      <span>Django</span>
                      <span>Python</span>
                      <span>MySQL</span>
                      <span>REST API</span>
                    </div>
                  </div>

                  <p className="flip-hint">
                    ← Hover to return
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      </AnimatedSection>


      <AnimatedSection>
        {/* Achievements */}
        <section id="achievements" className="section achievements-section">
          <div className="container">
            <p className="section-label">ACHIEVEMENTS</p>
            <h2>What I've Accomplished</h2>

            <div className="achievements-grid">

              {/* Achievement 1 */}
              <div className="achievement-card">
                <div className="achievement-logo">
                  <img
                    src="/Resume/achievements/AIOTIE_2026.png"
                    alt="Achievement 1 logo"
                  />
                </div>

                <div className="achievement-content">
                  <p className="achievement-result">🥈 Silver</p>

                  <h3>AI and IoT Innovation EXPO 2026 (AIOTIE)</h3>

                  <p className="achievement-description">
                    Innnovation: Computer Vision-Based Accident Detection and Reporting System
                  </p>

                  <span className="achievement-year">- 2026 -</span>
                </div>
                <a href="/Resume/achievements/AIoTIE2026_Award_Silver_AIOTIE2026-125.pdf" target="_blank" rel="noreferrer" className="certificate-btn" > View Certificate </a>
              </div>

              {/* Achievement 2 */}
              <div className="achievement-card">
                <div className="achievement-logo">
                  <img
                    src="/Resume/achievements/ctf.png"
                    alt="Achievement 2 logo"
                  />
                </div>

                <div className="achievement-content">
                  <p className="achievement-result">Cybersecurity</p>

                  <h3>New Era Capture The Flag (CTF) Cyber Security Competition Achievement (2023)</h3>

                  <p className="achievement-description">
                    Participated in New Era Capture The Flag (CTF) Cyber Security Competition
                  </p>

                  <span className="achievement-year">- 2023 -</span>
                </div>
                <a href="/Resume/achievements/ctf.pdf" target="_blank" rel="noreferrer" className="certificate-btn" > View Certificate </a>
              </div>

              {/* Achievement 3 */}
              <div className="achievement-card">
                <div className="achievement-logo">
                  <img
                    src="/Resume/achievements/six_star_edu.png"
                    alt="Achievement 3 logo"
                  />
                </div>

                <div className="achievement-content">
                  <p className="achievement-result">Python</p>

                  <h3>Completion of Python Full Stack Certificate by Six Star Education</h3>

                  <p className="achievement-description">
                    Succefully completed Python Full Stack Course provided by Six Star Education
                  </p>

                  <span className="achievement-year">- 2022 -</span>
                </div>
                <a href="/Resume/achievements/Six Star Python Completion Certificate.pdf" target="_blank" rel="noreferrer" className="certificate-btn" > View Certificate </a>
              </div>

            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="container">

          <p className="section-label">CONTACT</p>

          <div className="contact-header">
            <h2>Let's Connect</h2>

            <p>
              Interested in working together, discussing a project,
              or simply connecting? Feel free to reach out.
            </p>
          </div>


          <div className="contact-content">

            {/* Contact Information */}
            <div className="contact-info">

              <div className="contact-item">
                <span className="contact-label">Email</span>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=le1230715@gmail.com" >
                  le1230715@gmail.com
                </a>
              </div>


              <div className="contact-item">
                <span className="contact-label">GitHub</span>

                <a
                  href="https://github.com/Ahle0715"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Ahle0715
                </a>
              </div>


              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>

                <a
                  href="https://www.linkedin.com/in/ho-zi-le-36237125a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/ho-zi-le-36237125a/
                </a>
              </div>

            </div>

            {/* Resume */}
            <div className="contact-resume">

              <p>
                Want to learn more about my experience and projects?
              </p>

              <a
                href="/Resume/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-btn"
              >
                View My Resume →
              </a>

            </div>

          </div>

        </div>
      </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 HO ZI LE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;