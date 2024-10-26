// my-portfolio\src\components\sections\Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div>
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">Scroll down to learn more about me and my projects.</p>
      </div>
    </section>
  );
};

export default Home;
