// src\components\TechnologyCard.tsx
import React from "react";

interface TechnologyCardProps {
  title: string;
  techStack: string[];
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, techStack }) => {
  return (
    <div className="bg-gray-800 flex justify-center text-white rounded-lg overflow-hidden shadow-md min-w-[200px] max-w-[350px] min-h-[200px] max-h-[300px] w-full group transition-shadow duration-300">
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-3 mt-5 h-full">
          {techStack.map((tech, idx) => (
            <span key={idx} className="bg-red-500 text-md font-semibold px-2 py-1 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
