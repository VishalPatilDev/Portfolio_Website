import {Download } from 'lucide-react';
import styles from '../styles/style';


/* ========= RESUME ========= */
const Resume = () => {
    const skills = {
        Programming: ['Java', 'C# (.NET)', 'JavaScript', 'C', 'C++'],
        WebStack: ['Spring Boot', 'React.js', 'ASP.NET Core', 'Node.js', 'HTML', 'CSS', 'JWT'],
        Databases: ['MySQL', 'MongoDB'],
        Tools: ['Git', 'Docker', 'Jenkins', 'Kubernetes (Basic)', 'Postman'],
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.contentWrapper}>
                <div style={styles.card}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <h2 style={{ ...styles.heading2, marginBottom: 0, border: 'none' }}>My Resume</h2>
                        <a
                            href="/VishalVPatilResume.pdf"
                            download="Vishal_Patil_Resume.pdf"
                            style={styles.button}
                        >
                            <Download size={20} />
                            Download PDF
                        </a>
                    </div>

                    <h2 style={styles.heading2}>Technical Skills</h2>
                    {Object.entries(skills).map(([category, list]) => (
                        <div key={category}>
                            <h3 style={styles.heading3}>{category}</h3>
                            {list.map((skill) => (
                                <span key={skill} style={{ ...styles.badge, background: '#dbeafe', color: '#1e40af' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Resume