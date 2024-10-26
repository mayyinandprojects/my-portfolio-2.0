import React from 'react';
import Home from './sections/Home';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';

const MainView: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen lg:ml-64">
      {/* Render the sections */}
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default MainView;
