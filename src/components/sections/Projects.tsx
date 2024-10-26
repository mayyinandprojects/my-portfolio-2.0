// my-portfolio\src\components\sections\Projects.tsx

import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-gray-800 text-white"
    >
      <div>
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-lg">Here you can see my work and projects.</p>
      </div>
    </section>
  );
};

export default Projects;
