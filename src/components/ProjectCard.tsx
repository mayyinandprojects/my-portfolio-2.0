import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  links: { name: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, techStack, links }) => {
  return (
    // The group class is added to the main card container to allow child elements to respond to the hover state of the parent.
    // The transition-shadow and duration-300 classes are added to provide a smooth transition effect when hovering over the card.
    <div className="bg-gray-700 text-white rounded-lg overflow-hidden shadow-md max-w-xs group transition-shadow duration-300">
      <div className="relative group">
        {/* Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-center px-4 text-sm">{description}</p>
        </div>
      </div>
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {techStack.map((tech, idx) => (
            <span key={idx} className="bg-blue-500 text-sm font-semibold px-2 py-1 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="text-center space-x-4 text-s mt-2">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 bold-hover"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Add white shadow on hover */}
      <style>{`
        .group:hover {
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
