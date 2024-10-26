import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-gray-700 text-white">
      <div>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">Learn more about my journey as a developer.</p>
      </div>
    </section>
  );
};

export default About;
