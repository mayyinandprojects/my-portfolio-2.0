// my-portfolio\src\components\sections\Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div>
        <h1 className="text-5xl font-bold mb-4 relative">
          {/* wrap the gradient in a before element to solve clipping issue - creates a pseudo-element that mimics the shape and position of the text if bg-clip-text alone clips text too tightly*/}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400  before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400">
            Driven by curiosity, coding with purpose.
          </span>
        </h1>

        <p className="text-lg">
          Hi! I am <strong>May Yin, FullStack Web Developer</strong> with a
          former background as a Digital Maker Hub Manager and STEM educator.
        </p>
        <p className="text-lg">
          I enjoy{" "}
          <strong>crafting engaging, accessible web experiences.</strong>
        </p>
      </div>
  {/* Arrow positioned at the bottom as a link with bounce animation and shadow on hover */}
  <a
    href="#projects"
    id="next-section-arrow-container"
    className="absolute bottom-4 transform -translate-x-1/2 flex justify-center items-center animate-bounce-custom"
  >
    <img
      src="src/assets/arrowDownIcon_home.svg"
      alt="Scroll to Projects"
      className="h-5 w-5 text-white mb-3 transition-shadow duration-200 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
    />
  </a>

  {/* Custom bounce animation */}
  <style>{`
    @keyframes bounce-custom {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .animate-bounce-custom {
      animation: bounce-custom 2s infinite;
    }
  `}</style>
    </section>
  );
};

export default Home;
