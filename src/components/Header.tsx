import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const sections = ['home', 'about', 'projects', 'contact'];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to detect the active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        controls.start({ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, controls]);

  return (
    <header className="flex justify-between items-center w-full p-5 bg-white fixed top-0 z-50">
      {/* Logo */}
      <a href="index.html" className="text-2xl font-bold text-black ml-4 md:ml-24">
        KHELOUFI WALID
      </a>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
        <div className={`w-8 h-1 bg-black mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-8 h-1 bg-black mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-1 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {/* Navigation Menu (Desktop) */}
      <nav className="hidden md:flex gap-8 ml-auto mr-24">
        <ul className="flex flex-col md:flex-row gap-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-black text-lg font-medium relative transition-colors duration-300 ${
                  activeSection === section ? 'text-blue-600' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.span
                    className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-600"
                    layoutId="underline"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu (Animated) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-14 left-0 w-full bg-white z-40 shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {sections.map((section) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full text-center"
              >
                <a
                  href={`#${section}`}
                  className={`text-xl font-medium text-black hover:text-blue-600 transition-colors duration-300 relative ${
                    activeSection === section ? 'text-blue-600' : ''
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.span
                      className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600"
                      layoutId="underline"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
