import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
/* ========= APP ========= */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home></Home>;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      case 'profile': return <Profile />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}
