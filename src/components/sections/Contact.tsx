import React from "react";
import githubIcon from "/src/assets/github-142-svgrepo-com.svg";
import linkedinIcon from "/src/assets/linkedin-161-svgrepo-com.svg";

const Contact: React.FC = () => {
  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="flex flex-col p-5 items-center lg:p-20 bg-gray-800 text-white"
    >
      <div className="mb-8 text-center">
        <h2 className="text-4xl mt-20 font-bold mb-4">Contact Me</h2>
        <p className="text-lg">
          <strong>Feel free to contact me</strong> - for work, collaborations or say hello.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <div className="mb-4">
            <input
              type="hidden"
              name="access_key"
              value="90a6baef-1d29-49d6-aff6-8cb22f557ad6"
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="contact-name"
              id="contact-name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="contact-email"
              id="contact-email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="contact-message"
              id="contact-message"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <footer className="flex flex-col items-center justify-center py-4 text-white">

        {/* Flex container for social icons */}
        <div className="flex space-x-4 mb-10">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/mayyinandprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-300"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="h-6 w-6 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition-shadow duration-300"
            />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/may-yin-lam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-300"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="h-6 w-6 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition-shadow duration-300"
            />
          </a>
        </div>
        {/* Footer Text */}
        <p className="text-center text-white text-s">
          &copy;2024 May Yin. All rights reserved.
        </p>
        <p className="mt-4 text-center text-s">
          This portfolio is designed and developed with <strong>React</strong> and <strong>Tailwind CSS</strong>,
          built using <strong>Vite</strong>, and deployed on <strong>GitHub Pages</strong>.
        </p>

        {/* Scroll to Top Button */}
        <p className="text-lg mt-6 mb-4 text-center">
          <span
            onClick={scrollToTop}
            className="text-blue-400 bold-hover hover:cursor-pointer hover:text-blue-300 transition-colors duration-300"
          >
            Scroll to Top ↑
          </span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
