// src/components/sections/Projects.tsx

import React from 'react';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      image: 'src/assets/myFlixAngular_projects.png',
      title: 'MyFlix Angular',
      description: 'A responsive web application built using Angular, redesigned from the previous project myFlixDB built with React. This app allows users to browse movies, register an account, log in, and manage their profile.',
      techStack: ['Angular', 'Angular Material', 'Typescript', 'API', 'TypeDoc'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/myFlixAngular' },
        { name: 'Live Link↗', url: 'https://mayyinandprojects.github.io/myFlixAngular/' },
        { name: 'Case Study↗', url: '/casestudy-myflix-angular' },
      ],
    },
    {
      image: 'src/assets/chatapp_projects.png',
      title: 'Chat App',
      description: 'A responsive web application built using Angular. This app allows users to browse movies, register an account, log in, and manage their profile.',
      techStack: ['React Native', 'Firebase', 'Expo', 'Gifted Chat'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/Chat-App' },
        { name: 'Case Study↗', url: 'https://example.com/casestudy' },
      ],
    },
    {
      image: 'src/assets/meet_projects.png',
      title: 'Meet - Event Discovery App',
      description: 'Meet is a React-based event discovery app that allows users to browse and explore upcoming events across various cities.',
      techStack: ['React', 'Serverless', 'Google Calendar API', 'Jest','Puppeteer','Recharts'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/meet' },
        { name: 'Live Link↗', url: 'https://mayyinandprojects.github.io/meet/' },
      ],
    },
    {
      image: 'src/assets/myFlixReact_projects.png',
      title: 'myFlixDB React',
      description: 'myFlixDB is a demo web application built with React that allows users to browse, view details, and manage their favorite movies. ',
      techStack: ['React','Bootstrap', 'API', 'Javascript', 'Swagger.js'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/meet' },
        { name: 'Live Link↗', url: 'https://myflixmoviedatabase.netlify.app/' },
      ],
    },
    {
      image: 'src/assets/movieApi_projects.png',
      title: 'Movie API',
      description: 'MovieAPI is a movie API system providing movie and user management with features like authentication and data validation. ',
      techStack: ['React','Bootstrap', 'Express.js', 'Javascript', 'Swagger.js'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/Movie-API' },
        { name: 'Live Link↗', url: 'https://movie-api-4o5a.onrender.com/documentation.html' },
      ],
    },
    {
      image: 'src/assets/pokedex_projects.png',
      title: 'Pokédex App',
      description: 'This app is a simple Pokémon repository that displays a list of Pokémon from nine different generations fetched from the PokéAPI. It allows users to view Pokémon details in a modal, including their types, abilities, height, weight, and a Pokédex entry.',
      techStack: ['React','Bootstrap', 'PokeAPI', 'Javascript'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/Pokedex-App-with-Javascript' },
        { name: 'Live Link↗', url: 'https://mayyinandprojects.github.io/Pokedex-App-with-Javascript/' },
      ],
    },
    {
      image: 'src/assets/portfolio_projects.png',
      title: 'Portfolio - HTML & CSS',
      description: 'My first portfolio design project, created with HTML and CSS.',
      techStack: ['HTML','CSS', 'Sass'],
      links: [
        { name: 'Github↗', url: 'https://github.com/mayyinandprojects/portfolio-website' },
        { name: 'Live Link↗', url: 'https://mayyinandprojects.github.io/portfolio-website/index.html' },
      ],
    },

    // Add more project objects as needed
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-8">
      <h2 className="text-4xl font-bold mb-8 mt-20">My Projects</h2>
      <p className="text-md">Check Out My Project Portfolio</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mb-10 mt-10">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            links={project.links}
          />
        ))}
      </div>
      <div id="projects-github-link-container" className="flex items-center text-blue-400 hover-bold hover:underline"><a href="https://github.com/mayyinandprojects/" target="_blank">Visit my Github Repository for more projects ↗</a></div>
    </section>
  );
};

export default Projects;