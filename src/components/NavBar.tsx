import React from 'react';

const Navbar: React.FC = () => {
  return (
    <aside className="bg-black text-white w-full lg:w-72 p-6 flex flex-col justify-between h-screen lg:fixed top-0 left-0">
      {/* Name and Title */}
      <div>
        <h1 className="text-3xl font-bold mb-2">May Yin</h1>
        <p className="text-sm mb-6">Fullstack Web Developer</p>

        {/* Social Links */}
        <div className="flex space-x-1 text-sm mb-8">

          <a href="https://github.com" className="block hover:underline">
            Github
          </a>
          <span>|</span>
          <a href="https://linkedin.com" className="block hover:underline">
            LinkedIn
          </a>
          <span>|</span>
          <a href="/resume-en.pdf" className="block hover:underline">
            Resume (EN)
          </a>
          <span>|</span>
          <a href="/lebenslauf-de.pdf" className="block hover:underline">
            Lebenslauf (DE)
          </a>
        </div>

        {/* Main Navigation Links */}
        <nav className="space-y-4">
          <a href="#home" className="block text-lg hover:underline">
            Home
          </a>
          <a href="#projects" className="block text-lg hover:underline">
            Projects
          </a>
          <a href="#about" className="block text-lg hover:underline">
            About
          </a>
          <a href="#contact" className="block text-lg hover:underline">
            Contact
          </a>
        </nav>
      </div>

      {/* Footer */}
      <footer className="hidden lg:block text-xs text-center mt-10">
        <p>&copy; May Yin 2024</p>
      </footer>
    </aside>
  );
};

export default Navbar;
