import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    } else if (savedDarkMode === null) {
      // If no preference is saved, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      localStorage.setItem('darkMode', prefersDark.toString());
    }
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;