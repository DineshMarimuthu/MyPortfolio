import React from 'react'
import '../css/all.css';
import github from '../images/download.png'
import Email from '../images/linkedin.png'
import linkedin from '../images/mail.png'


const MyPage = () => {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <h1>Dinesh Marimuthu</h1>
        <p>Software Quality Engineer</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/dinesh1pythondeveloper" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" /> LinkedIn
          </a>
          <a href="mailto:dineshmnlk@gmail.com">
            <img src={Email} alt="Gmail" />  Gmail
          </a>
          <a href="https://github.com/DineshMarimuthu" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" /> GitHub
          </a>
          
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate QA Engineer with 2+ years of experience in manual and automated testing.
          Strong background in Agile environments and a knack for catching the smallest of bugs!
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Selenium & Java</li>
          <li>Test Automation</li>
          <li>Jira & Confluence</li>
          <li>Functional & Regression Testing</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>
        <h3>1.LTIMindtree</h3>
        <p><strong>Software Quality Engineer</strong> — Jan 2022 to Feb 2024</p>
        <ul>
          <li>Wrote and maintained Selenium test scripts in Java.</li>
          <li>Worked in Agile teams and participated in sprint ceremonies.</li>
          <li>Logged bugs in Jira and collaborated via Confluence.</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong> Manual Testing- Singel page application</strong> – A full-stack issue tracking system for QA teams.</li>
          <li><strong>Charles Stanley-UI Testing </strong> – Selenium-based reusable automation framework.</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="experience">
        
        <h3>2.XBS</h3>
        <p><strong>Software Engineer (.NET & React)</strong> — Apr 2025 to Till-Now</p>

        <ul>
          <li>Developed and maintained front-end components using React.js.</li>
          <li>Built and integrated RESTful APIs using ASP.NET Core.</li>
          <li>Wrote unit and integration tests to ensure application quality.</li>
          <li>Worked in Agile teams, contributing to sprint planning, reviews, and retrospectives.</li>
          <li>Used Jira for task tracking and Confluence for documentation.</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Villa Booking project</strong> – To develop FullStack Application using .Net and React.</li>
          
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: dineshmnlk@gmail.com</p>
        <p>Mobile: +919443446798</p>
      </section>
    </div>
  );
};

export default MyPage;
