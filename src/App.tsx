import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects /><br /><br />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;