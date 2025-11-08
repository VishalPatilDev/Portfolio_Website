import styles from '../styles/style';

/* ========= PROFILE ========= */
const Profile = () => (
  <div style={styles.pageContainer}>
    <div style={styles.contentWrapper}>
      <div style={styles.card}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ ...styles.avatar, width: '160px', height: '160px', fontSize: '3rem' }}>VP</div>
          <h2 style={styles.heading1}>Vishal Vijaykumar Patil</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '1rem' }}>
            Full Stack Developer | Java • Spring Boot • React
          </p>
        </div>

        <h3 style={styles.heading2}>Professional Summary</h3>
        <p style={styles.paragraph}>
          Aspiring Full Stack Developer skilled in Java, Spring Boot, React, and RESTful APIs.
          Experienced in building scalable applications with secure authentication systems.
          Passionate about DevOps practices and continuous learning.
        </p>

        <h3 style={styles.heading2}>Achievements</h3>
        <ul>
          <li>Top performer in CDAC PG-DAC 2025</li>
          <li>Developed “LearnSphere” — E-Learning Platform (Spring Boot + React)</li>
          <li>Proficient in Git, Docker, Jenkins, and RESTful API design</li>
        </ul>
        <h3 style={styles.heading2}>Personal Information</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Date of Birth:</strong> 25th December 2002</li>
        <li style={styles.listItem}><strong>Languages Known:</strong> English, Hindi, Marathi</li>
        <li style={styles.listItem}><strong>Hobbies:</strong> Coding, Reading Books, Traveling, Playing Cricket</li>
      </ul>
      </div>
      


    </div>
  </div>
);
export default Profile