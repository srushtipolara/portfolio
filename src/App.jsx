import { useEffect } from 'react'
import './App.css'
import html from './assets/html5.png'
import css from './assets/css3.png'
import js from './assets/js.png'
import ts from './assets/ts.png'
import react from './assets/react.png'
import redux from './assets/redux-toolkit.png'
import playwright from './assets/playwright.png'
import git from './assets/git.png'
import node from './assets/nodejs.jpg'
import api from './assets/api.png'
import bootstrap from './assets/bootstrap.png'
import tailwind from './assets/tailwind.png'

import { FaCode } from "react-icons/fa6";


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-animate')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <main className="profile-hero scroll-animate">
        <section className="profile-card">
          <div className="profile-badge">
            <FaCode className="badge-icon" />
            <span>Frontend Developer</span>
          </div>

          <h1 className="profile-name">Srushti Polara</h1>

          <p className="profile-description">
            I have <strong>3+ years of experience</strong> building modern web applications. Passionate
            about creating intuitive user experiences with clean, maintainable code.
          </p>

          <div className="profile-actions">
            <button className="btn primary">Available for opportunities</button>
            <button className="btn secondary">
              <span className="dot" />
              India
            </button>
          </div>
        </section>
      </main>

      <section className="info-section scroll-animate">
        <div className="info-grid">
          <article className="info-card">
            <div className="info-card-header">
              <span className="info-icon">
                <span className="info-dot" />
              </span>
              <h2>Education</h2>
            </div>
            <div className="info-card-body">
              <p className="info-title">JECRC UNIVERSITY</p>
              <p className="info-subtitle">Bachelor of Computer Applications</p>
            </div>
          </article>

          <article className="info-card">
            <div className="info-card-header">
              <span className="info-icon">
                <span className="info-line" />
              </span>
              <h2>Languages</h2>
            </div>
            <div className="info-card-body">
              <div className="chip-row">
                <span className="chip">English</span>
                <span className="chip">Hindi</span>
                <span className="chip">Gujarati</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="skills scroll-animate">
        <div className="skills-inner">
          <h2>My <span>Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-card">
              <img src={html} alt="" />
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <img src={css} alt="" />
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <img src={bootstrap} alt="" />
              <p>Bootstrap</p>
            </div>
            <div className="skill-card">
              <img src={css} alt="" />
              <p>Tailwind CSS</p>
            </div>
            <div className="skill-card">
              <img src={js} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <img src={ts} alt="" />
              <p>TypeScript</p>
            </div>
            <div className="skill-card">
              <img src={react} alt="" />
              <p>React</p>
            </div>
            <div className="skill-card">
              <img src={redux} alt="" />
              <p>Redux</p>
            </div>
            <div className="skill-card">
              <img src={playwright} alt="" />
              <p>Playwright</p>
            </div>
            <div className="skill-card">
              <img src={node} alt="" />
              <p>Node Js</p>
            </div>
            <div className="skill-card">
              <img src={api} alt="" />
              <p>API</p>
            </div>
            <div className="skill-card">
              <img src={git} alt="" />
              <p>Git / GitHub</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section scroll-animate">
        <div className="work-inner">
          <header className="work-header">
            <h2>Work Experience</h2>
            <p>Building exceptional web experiences</p>
          </header>

          <article className="work-card">
            <div className="work-card-header">
              <div className="work-role">
                <div className="work-role-icon">
                  <span className="work-role-mark" />
                </div>
                <div>
                  <h3>Frontend Developer</h3>
                  <span className="work-period">Jan 2023 – Present</span>
                </div>
              </div>
            </div>

            <div className="work-companies">
              <span className="chip company">Navya Infotech</span>
              <span className="chip company">BVM Infotech</span>
              <span className="chip company">Scaleteam Technology Pvt. Ltd.</span>
            </div>

            <ul className="work-list">
              <li>Implemented modern and interactive UI components.</li>
              <li>Integrated APIs and optimized frontend performance.</li>
              <li>Built reusable UI components for complex dashboards and workflows.</li>
              <li>Followed modern coding standards and wrote clean, maintainable code.</li>
              <li>Collaborated with cross‑functional teams to improve scalability and UX.</li>
              <li>Worked on an AI‑based content generation blog platform.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="projects scroll-animate">
        <div className="projects-inner">
          <header className="projects-header">
            <p className="projects-eyebrow">Selected Client Work</p>
            <h2>Recent collaborations &amp; case studies</h2>
          </header>

          <div className="project-grid">
            <article className="project-card">
              <h3>BluField</h3>
              <p>Financial services platform for connecting clients with finance experts.</p>
              <div className="tech">
                <span>React</span>
                <span>Java</span>
                <span>Spring Boot</span>
              </div>
            </article>

            <article className="project-card">
              <h3>Skalpel</h3>
              <p>Healthcare logistics platform for surgical instrument tracking.</p>
              <div className="tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Cloud APIs</span>
              </div>
            </article>

            <article className="project-card">
              <h3>Velzon Dashboard</h3>
              <p>Admin dashboard interface for managing analytics, CRM, and business data.</p>
              <div className="tech">
                <span>React</span>
                <span>Bootstrap</span>
                <span>Redux</span>
              </div>
            </article>

            <article className="project-card">
              <h3>Gala On Rent</h3>
              <p>Event rental platform for furniture and décor booking.</p>
              <div className="tech">
                <span>React</span>
                <span>REST APIs</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="automation-section scroll-animate">
        <div className="automation-inner">
          <header className="automation-header">
            <h2>Automation Testing</h2>
            <p>End-to-end and integration testing with modern tooling.</p>
          </header>

          <div className="automation-grid">
            <article className="automation-card automation-tools">
              <div className="automation-card-head">
                <span className="automation-card-icon" aria-hidden="true">🛠</span>
                <h3>Tools</h3>
              </div>
              <div className="automation-pills">
                <span className="automation-pill">Playwright</span>
                <span className="automation-pill">TypeScript</span>
                <span className="automation-pill">CI/CD Integration</span>
              </div>
            </article>

            <article className="automation-card automation-features">
              <div className="automation-card-head">
                <span className="automation-card-icon" aria-hidden="true">✓</span>
                <h3>Automated Features</h3>
              </div>
              <ul className="automation-feature-list">
                <li>Authentication testing</li>
                <li>Form validation</li>
                <li>API integration testing</li>
                <li>Dashboard workflows</li>
                <li>File upload/download testing</li>
                <li>Cross-browser automation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="core-expertise-section scroll-animate">
        <div className="core-expertise-inner">
          <h2 className="core-expertise-title">
            <span className="core-expertise-icon" aria-hidden="true">⚙</span>
            Core Expertise
          </h2>
          <ul className="core-expertise-list">
            <li><span className="expertise-check" aria-hidden="true">✓</span>Responsive Design</li>
            <li><span className="expertise-check" aria-hidden="true">✓</span>Cross-browser Compatibility</li>
            <li><span className="expertise-check" aria-hidden="true">✓</span>Performance Optimization</li>
          </ul>
        </div>
      </section>

      <section className="contact-section scroll-animate">
        <div className="contact-inner">
          <header className="contact-header">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out for opportunities or collaborations.</p>
          </header>

          <div className="contact-grid">
            <article className="contact-card">
              <div className="contact-main">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:srushtipolara@gmail.com" className="contact-value">
                    srushtipolara@gmail.com
                  </a>
                </div>
              </div>
            </article>

            <article className="contact-card">
              <div className="contact-main">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Surat, Gujarat</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
