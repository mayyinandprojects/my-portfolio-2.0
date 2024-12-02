import React from "react";
import TechnologyCard from "../TechnologyCard";
import Resume from "/src/assets/MayYinLam_Resume_FullstackDeveloper.pdf";
import Lebenslauf from "/src/assets/MayYinLam_Lebenslauf_FullstackWebentwicklerin.pdf";

// Import the About Me image
import aboutMeImage from "/src/assets/IMG_about.jpg";

const About: React.FC = () => {
  const technologies = [
    {
      title: "Programming/ Markup Languages",
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
        className="min-h-screen p-8 bg-gray-700 text-white lg:pl-40 lg:pr-40"
      >
        {/* Subsection: About - main */}
        <h2 className="text-4xl font-bold mb-10 mt-20 text-center">About Me</h2>
        <div
          id="about-me-header"
          className="flex flex-col md:flex-row items-center md:space-x-10"
        >
          {/* Text Section */}
          <div className="mb-10 md:w-1/2">
            <p className="text-lg mb-4">
              I’m a <strong>Fullstack Web Developer</strong> based in{" "}
              <strong>Oldenburg, Germany</strong> with a background in education
              and STEM program management. After more than five years of using
              technology to inspire students and lead hands-on learning
              experiences, I transitioned into web development to bring my
              passion for problem-solving and creativity to the tech world.
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
              src={aboutMeImage} // Use the imported image here
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
              May - Nov 2024 -{" "}
              <a
                href="https://careerfoundry.com/"
                className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
              >
                CareerFoundry
              </a>{" "}
              Full-Stack Web Development Bootcamp
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
              2017 - 2023{" "}
              <a
                href="https://www.chumbaka.asia/"
                className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
              >
                Chumbaka
              </a>
            </h4>
            <ul className="list-disc pl-5">
              <li className="mb-1 text-lg">
                <strong>Role:</strong> Digital Maker Hub Manager
              </li>
              <li className="mb-1 text-lg">
                <strong>Key Skills:</strong> Program and curriculum development, stakeholder
                management, event coordination, community building, STEM
                education, technology-driven innovation
              </li>
              <li className="mb-1 text-lg">
                <strong>Subjects taught:</strong> STEAM-based subjects based on various
                open-source softwares such as {" "}
                <a
                  href="https://scratch.mit.edu/"
                  className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
                >
                  MIT Scratch
                </a>
                ,{" "}
                <a
                  href="https://appinventor.mit.edu/"
                  className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
                >
                  MIT App Inventor
                </a>
                ,{" "}
                <a
                  href="https://www.chumbaka.asia/"
                  className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
                >
                  Arduino IDE
                </a>
                ,{" "}
                <a
                  href="https://www.arduino.cc/en/software"
                  className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
                >
                  mBlock
                </a>
                , and{" "}
                <a
                  href="https://mblock.makeblock.com/en/"
                  className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
                >
                  Google Workspace
                </a>
                ; using projects-based learning and design thinking approach.
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-2 text-yellow-400">
              2015 - 2016 -{"  "}
              <a
                href="https://teachformalaysia.org/"
                className="underline hover:text-yellow-500 
        transition-transform duration-500 ease-in-out 
        transform"
              >
                Teach For Malaysia
              </a>{" "}
              & Pujut Secondary School
            </h4>
            <ul className="list-disc pl-5">
              <li className="mb-1 text-lg">
                <strong>Role:</strong> Teach for Malaysia Fellow/Public School
                Teacher
              </li>
              <li className="mb-1 text-lg">
                <strong>Key Skills:</strong> Communication, leadership,
                classroom management, STEM coaching, student engagement
              </li>
              <li className="mb-1 text-lg">
              <strong>Subjects taught:</strong>{" "}Geography, English, Moral Studies 
              </li>
            </ul>
          </div>
        </div>

        {/* Subsection: Technologies */}
        <h3 className="text-3xl font-semibold mb-5 text-center">
          Technologies Learned
        </h3>
        <div className="flex flex-wrap justify-center custombreakpoint-about-techstack:grid-cols-3 md:grid-cols-3 sm:grid  gap-8 mb-10 mt-10 ">
          {/* w-full added below to ensure full width even on smaller screens*/}
          {technologies.map((technology, idx) => (
            <div key={idx} className="flex justify-center w-full">
              <TechnologyCard
                key={idx}
                title={technology.title}
                techStack={technology.techStack}
              />
            </div>
          ))}
        </div>
        <div
          id="download-resume-container"
          className="flex flex-col justify-center text-center"
        >
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xl bold-hover hover:cursor-pointer hover:text-blue-300 transition-colors duration-300"
          >
            Download my CV↗
          </a>
          <p>or</p>
          <a
            href={Lebenslauf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xl bold-hover hover:cursor-pointer hover:text-blue-300 transition-colors duration-300"
          >
            Meinen Lebenslauf Herunterladen↗
          </a>
        </div>

        {/* 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-auto flex justify-center mb-3">
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
          </button> 
          */}
      </section>
    </>
  );
};

export default About;
