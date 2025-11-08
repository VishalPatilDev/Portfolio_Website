import { Menu, X} from 'lucide-react';
import React, { useState } from 'react';
import styles from '../styles/style';


/* ========= NAVBAR ========= */
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Resume', 'Contact', 'Profile'];

  return (
    <>
      <nav style={styles.navbar}>
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