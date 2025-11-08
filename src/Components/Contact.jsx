import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import styles from '../styles/style';


/* ========= CONTACT ========= */
const Contact = () => (
    <div style={styles.pageContainer}>
        <div style={styles.contentWrapper}>
            <div style={styles.card}>
                <h2 style={styles.heading2}>Contact</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div><Mail color="#2563eb" /> vishalpatil.dev2@gmail.com</div>
                    <div><Phone color="#2563eb" /> +91 9834876254</div>
                    <div><MapPin color="#2563eb" /> Pune, India</div>
                    <div><Linkedin color="#2563eb" /> <a target="_blank" href="https://linkedin.com/in/vishalpatildevloper">linkedin.com/in/vishalpatildevloper</a></div>
                    <div><Github color="#2563eb" /> <a target="_blank" href="https://github.com/vishalpatildev">github.com/vishalpatildev</a></div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact