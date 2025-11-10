/* ========= GLOBAL STYLES ========= */
const styles = {
  /* ===== Navbar ===== */
  navbar: {
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },

  navContainer: {
    width: '95vw', // match content width
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },

  navBrand: { fontSize: '1.5rem', fontWeight: 'bold' },
  navMenu: { display: 'flex', gap: '2rem' },

  navButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem 0',
    transition: 'color 0.3s',
  },

  navButtonActive: {
    borderBottom: '2px solid white',
  },

  mobileMenuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'none',
  },

  /* ===== Page Layout ===== */
  pageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f9fafb, #f5f3ff)',
    paddingTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflowX: 'hidden'
  },

  contentWrapper: {
    width: '100vw',          // stretch across 95% of screen
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 2rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  /* ===== Card ===== */
  card: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
    padding: '2rem 3rem',
    margin: '2rem auto',
    width: '90%',
    maxWidth: '1600px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },

  /* ===== Headings ===== */
  heading1: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
    textAlign: 'center',
  },

  heading2: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #2563eb',
    paddingBottom: '0.5rem',
  },

  heading3: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },

  /* ===== Typography ===== */
  paragraph: { color: '#1f2937', lineHeight: '1.8', marginBottom: '1rem' },

  /* ===== Avatar ===== */
  avatar: {
    width: '128px',
    height: '128px',
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    borderRadius: '50%',
    margin: '0 auto 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },

  /* ===== Button ===== */
  button: {
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  /* ===== Skill Badge ===== */
  badge: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    margin: '0.25rem',
    fontWeight: '500',
    background: '#dbeafe',
    color: '#1e40af',
  },

  /* ===== Form Inputs ===== */
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    marginBottom: '1rem',
  },

  label: {
    display: 'block',
    color: '#374151',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
};

/* ========= Responsive Design ========= */
styles.responsive = {
  '@media (max-width: 1024px)': {
    contentWrapper: { width: '92vw', padding: '2rem 1rem' },
    card: { padding: '1.5rem 2rem' },
  },
  '@media (max-width: 768px)': {
  contentWrapper: { width: '100%', padding: '1.5rem' },
  heading1: { fontSize: '2rem' },
  heading2: { fontSize: '1.4rem' },
  heading3: { fontSize: '1.1rem' },
  paragraph: { color: '#111827', fontSize: '1rem', lineHeight: '1.8' }, // strong dark gray text
  card: { padding: '1.5rem', width: '95%' },
},

  '@media (max-width: 480px)': {
    heading1: { fontSize: '1.8rem' },
    heading2: { fontSize: '1.3rem' },
    button: { width: '100%', justifyContent: 'center' },
  },
};

export default styles;
