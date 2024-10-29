import React from "react";
import TechnologyCard from "../TechnologyCard";

const About: React.FC = () => {
  const technologies = [
    {
      title: "Programming/Markup Languages",
      techStack: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "JavaScript Frameworks",
      techStack: ["React", "Angular", "jQuery"],
    },
    {
      title: "CSS Frameworks",
      techStack: ["Bootstrap", "Angular Material", "Tailwind"],
    },
    {
      title: "Back-End Technologies",
      techStack: ["Node.js", "Express", "AWS"],
    },
    {
      title: "Databases",
      techStack: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "Testing",
      techStack: ["Jest", "Cucumber", "Puppeteer"],
    },
    {
      title: "Version Control & Documentation",
      techStack: ["Git / GitHub", "JSDoc", "TypeDoc", "Swagger.js"],
    },
    {
      title: "Mobile Development",
      techStack: ["React Native", "Expo"],
    },
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen py-12 px-6 bg-gray-700 text-white  lg:pl-80 lg:pr-40"
      >
        {/* Subsection: About - main */}
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        <div
          id="about-me-header"
          className="flex flex-col md:flex-row items-center md:space-x-10"
        >
          {/* Text Section */}
          <div className="mb-10 md:w-1/2">
            <p className="text-lg mb-4">
              I’m a <strong>Fullstack Web Developer</strong> with a background
              in education and STEM program management. After more than five
              years of using technology to inspire students and lead hands-on
              learning experiences, I transitioned into web development to bring
              my passion for problem-solving and creativity to the tech world.
            </p>
            <p className="text-lg">
              I’m excited to combine my experience in education with my
              technical skills to build{" "}
              <strong>user-focused, impactful digital solutions.</strong>
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-10 md:w-1/2 flex justify-center">
            <img
              src="src/assets/IMG_about.jpg"
              alt="About Me"
              className="object-cover h-72 w-72 rounded-lg shadow-md md:h-80 md:w-80"
            />
          </div>
        </div>

        {/* Subsection: Experience */}
        <div id="experience" className="mb-10">
          <h3 className="text-3xl font-semibold mb-3 text-center">
            Experience
          </h3>
          <p className="text-lg mb-2">
            Here's an overview of my professional background and experience in
            web development.
          </p>
          <div id="experience-list-container" className="pl-10 pr-10 mt-5">
            <h4 className="text-xl font-semibold mb-2 text-yellow-400">
              May - Nov 2024 - CareerFoundry Full-Stack Web Development Bootcamp{" "}
            </h4>
            <ul className="list-disc pl-5">
              <li className="mb-1 text-lg">
                <strong>Role:</strong> Full-Stack Web Development Student
              </li>
              <li className="mb-1 text-lg">
                <strong>Key Skills:</strong> Front-end programming, Back-end
                programming, Responsive Design, Test Driven Development,
                Problem-solving
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-2 text-yellow-400">
              2017 - 2021 Chumbaka Cyberjaya{" "}
            </h4>
            <ul className="list-disc pl-5">
              <li className="mb-1 text-lg">
                <strong>Role:</strong> Digital Maker Hub Manager{" "}
              </li>
              <li className="mb-1 text-lg">
                Key Skills: Program development, stakeholder management, event
                coordination, community building, STEM education,
                technology-driven innovation
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-2 text-yellow-400">
              2015 - 2016 Teach For Malaysia & SMK Pujut{" "}
            </h4>
            <ul className="list-disc pl-5">
              <li className="mb-1">
                <strong>Role:</strong> Teach for Malaysia Fellow/Public School
                Teacher{" "}
              </li>
              <li className="mb-1">
                <strong>Key Skills:</strong> Communication, leadership,
                classroom management, STEM coaching, student engagement
              </li>
            </ul>
          </div>
        </div>

        {/* Subsection: Technologies */}
        <h3 className="text-3xl font-semibold mb-5 text-center">
          Technologies Learned
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  mb-10 lg:pr-16 lg:pl-16">
          {technologies.map((technology, idx) => (
            <TechnologyCard
              key={idx}
              title={technology.title}
              techStack={technology.techStack}
            />
          ))}
        </div>
        <div id="download-resume-container flex row">
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-auto flex justify-center mb-3">
            <svg
              className="fill-current w-4 h-4 mr-2 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download My Resume</span>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-auto flex justify-center">
            <svg
              className="fill-current w-4 h-4 mr-2 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Meinen Lebenslauf Herunterladen</span>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default About;
