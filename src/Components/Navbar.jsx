import { Menu, X } from 'lucide-react';
import React, { useState,useEffect } from 'react';
import styles from '../styles/style';


/* ========= NAVBAR ========= */
const Navbar = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = ['Home', 'Resume', 'Contact', 'Profile'];

    return (
        <>
            <nav style={{
                ...styles.navbar,
                boxShadow: scrolled ? '0 6px 12px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s'
            }}>
                <div style={styles.navContainer}>
                    <div style={styles.navBrand}>Vishal Patil</div>
                    <div className="nav-menu" style={styles.navMenu}>
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item.toLowerCase())}
                                style={{
                                    ...styles.navButton,
                                    ...(activeSection === item.toLowerCase() ? styles.navButtonActive : {}),
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <button
                        className="mobile-menu-button"
                        style={styles.mobileMenuButton}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar