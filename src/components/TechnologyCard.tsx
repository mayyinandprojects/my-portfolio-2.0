import React from "react";

// Define the props interface for the TechnologyCard component
interface TechnologyCardProps {
  title: string;
  techStack: string[];
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  techStack,
}) => {
  return (
    // The group class is added to the main card container to allow child elements to respond to the hover state of the parent.
    // The transition-shadow and duration-300 classes are added to provide a smooth transition effect when hovering over the card.
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md max-w-xs group transition-shadow duration-300">
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-red-500 text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
