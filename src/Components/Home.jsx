
/* ========= HOME ========= */
import React from 'react';
import styles from '../styles/style';

const Home = () => (
  <div style={styles.pageContainer}>
    <div style={styles.contentWrapper}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={styles.avatar}>VP</div>
        <h1 style={styles.heading1}>Vishal Vijaykumar Patil</h1>
        <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '1rem' }}>Full Stack Developer</p>
        <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '100%', margin: '0 auto' }}>
          Aspiring Full Stack Developer skilled in Java, Spring Boot, React, and .NET. Passionate about
          building scalable web apps, authentication systems, and RESTful APIs.
          <p style={{ color: '#6b7280' }}>DOB: 25 December 2002 | Location: Pune, India</p>

        </p>
      </div>

      <div style={styles.card}>
        <h2 style={styles.heading2}>Education</h2>
        <div>
          <h3 style={styles.heading3}>PG-DAC (Post Graduate Diploma in Advanced Computing)</h3>
          <p style={styles.paragraph}>IACSD, Akurdi, Pune | 2025 | Percentage: 87.38%</p>
          <h3 style={styles.heading3}>B.E. in Electronics And Telecommunication</h3>
          <p style={styles.paragraph}>Savitribai Phule Pune University | 2020 – 2024 | CGPA: 8.55</p>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.heading2}>Projects</h2>
        <h3 style={styles.heading3}>LearnSphere – CDAC Major Project</h3>
        <ul>
          <li>Full-stack E-Learning Platform using Spring Boot and React.js.</li>
          <li>Implemented JWT Authentication with role-based access (Admin/User).</li>
          <li>Modules: User Management, Courses, Quizzes, Auto-Certificate Generation.</li>
        </ul>
        <p><b>Tech:</b> Spring Boot, React.js, MySQL, Docker, JWT</p>
        <h3 style={styles.heading3}>Warehouse Inventory Tracker</h3>
        <ul>
          <li>Real-time inventory tracking with Spring Boot and React.js.</li>
          <li>Used Observer Pattern for low-stock alerts and synchronization for concurrent updates.</li>
        </ul>
        <p><b>Tech:</b> Java, Spring Boot, React, REST APIs</p>
      </div>
    </div>
  </div>
);

export default Home;
