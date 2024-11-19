// src/components/sections/Journey.tsx
import React from "react";
import Carousel from "../Carousel";
// Importing images
import journeyImage1 from "/src/assets/1_journey.png";
import journeyImage2 from "/src/assets/2_journey.png";
import journeyImage3 from "/src/assets/3_journey.png";
import journeyImage4 from "/src/assets/4_journey.png";
import journeyImage5 from "/src/assets/5_journey.png";
import journeyImage6 from "/src/assets/6_journey.png";
import journeyImage7 from "/src/assets/7_journey.png";
import journeyImage8 from "/src/assets/8_journey.jpg";
import journeyImage9 from "/src/assets/9_journey.jpg";

const Journey: React.FC = () => {
  const handleScrollToContact = () => {
    const sectionElement = document.getElementById("contact");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const imageUrls = [
    { url: journeyImage1, caption: "Teachers' ICT Workshop in school" },
    { url: journeyImage2, caption: "We are in the Kuching Digital Maker Hub" },
    {
      url: journeyImage3,
      caption: "Student showcasing their upcycled toy with Arduino",
    },
    {
      url: journeyImage4,
      caption: "Student presenting their Scratch animated Science project",
    },
    {
      url: journeyImage5,
      caption: "Representing Malaysia at Computer Science World in Asia 2019",
    },
    {
      url: journeyImage6,
      caption:
        "University students sharing their ideas during a Design Thinking workshop",
    },
    {
      url: journeyImage7,
      caption:
        "Discussion with my Study Buddy from Career Foundry Web Development Bootcamp",
    },
    {
      url: journeyImage8,
      caption: "My Color Mixer LED Project, proudly powered by Arduino",
    },
    { url: journeyImage9, caption: "Photo from an evening stroll" },
  ];

  return (
    <section
      id="journey"
      className="min-h-screen p-8 bg-[#3b3b3b] text-white lg:pr-40 lg:pl-40"
    >
      <div className="mb-20">
        <h3 className="text-4xl font-bold mt-20 mb-10 text-white text-center">
          My Journey
        </h3>

        <p className="text-lg mb-6">
          My journey from education to tech has been filled with learning and
          growth.
        </p>

        <p className="text-lg mb-4">
          In <strong className="text-orange-400">2014</strong>, I graduated with
          a degree in <strong>E-Commerce</strong> from{" "}
          <strong className="text-yellow-400">
            Multimedia University, Malaysia
          </strong>
          , where I developed a strong foundation in both business and
          technology.
        </p>

        <p className="text-lg mb-4">
          In <strong className="text-orange-400">2015</strong> however, my
          desire to make a meaningful impact led me to{" "}
          <strong className="text-yellow-400">Teach For Malaysia.</strong> As a
          public school teacher, I honed my teaching and leadership skills.
        </p>

        <p className="text-lg mb-4">
          In <strong className="text-orange-400">2017</strong>, I joined{" "}
          <strong className="text-yellow-400">Chumbaka Cyberjaya</strong>, a
          social enterprise promoting STEM education. I managed the{" "}
          <strong>Digital Maker Hub @ Cyberjaya</strong>, a makerspace that
          regularly serves both students and adults seeking STEM education
          programmes, ranging from local to national level.
        </p>

        <p className="text-lg mb-4">
          Over four years, I collaborated with students, parents, educators, and
          organizations to foster a vibrant STEM community. Together, we helped
          students build creativity and problem-solving skills through
          technology—an experience that sparked my passion for tech's empowering
          potential.
        </p>

        <p className="text-lg mb-4">
          In <strong className="text-orange-400">2021</strong>, after relocating
          to <strong>Germany</strong>, I decided it was the perfect moment for a
          career change. Transitioning into tech felt like a natural choice.
        </p>

        <p className="text-lg mb-4">
          By <strong className="text-orange-400">2024</strong>, I enrolled in{" "}
          <strong className="text-yellow-400">CareerFoundry’s </strong>
          <strong>Full-Stack Web Development Bootcamp</strong>. This immersive
          program deepened my skills and connected me with industry experts,
          mentors, and tutors. Working alongside talented peers, I discovered
          the excitement of creating impactful solutions through code.
        </p>

        <p className="text-lg mb-4">
          Now, as a <strong className="text-red-400">Web Developer</strong>{" "}
          based in Germany, I’m excited to combine my background in education
          and STEM with my technical skills to create functional, engaging, and
          impactful web solutions.
        </p>

        <hr className="my-8 border-gray-400" />

        <p className="text-lg mb-4">
          Outside of work, I enjoy unwinding with <strong>MMORPG gaming</strong>{" "}
          or <strong>going for a stroll in nature</strong>.
        </p>
      </div>
      <Carousel images={imageUrls} />
      <p className="text-lg mt-6 mb-4 text-center">
        Thanks for reading! If you'd like to connect or discuss web development,
        <br />
        <div
          onClick={handleScrollToContact}
          className="text-blue-400 bold-hover hover:cursor-pointer hover:text-blue-300 transition-colors duration-300"
        >
          {" "}
          don’t hesitate to drop me a message! ↓
        </div>
      </p>
    </section>
  );
};

export default Journey;
