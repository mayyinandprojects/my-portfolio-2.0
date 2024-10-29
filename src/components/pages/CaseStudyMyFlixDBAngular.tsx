// src/pages/CaseStudyMyFlixDBAngular.tsx
import React from "react";

const CaseStudyMyFlixDBAngular: React.FC = () => {
  return (
    <section className="min-h-screen py-12 px-6 bg-gray-700 text-white lg:ml-20 lg:pl-40 lg:pr-40 text-center">
      <div className="container mx-auto max-w-6xl p-4">
        <h1 className="text-3xl font-bold mb-6">MyFlix Angular Case Study</h1>

        {/* Project Links */}
        <div className="text-md mb-6 space-x-2">
          <a href="https://github.com/mayyinandprojects/myFlixAngular" className="bold-hover text-blue-400">
            Github
          </a>
          <span>|</span>
          <a href="https://mayyinandprojects.github.io/myFlixAngular/" className="bold-hover text-blue-400">
            Live Link
          </a>
        </div>

        <hr className="my-6 border-gray-500" />

        {/* Project Overview */}
        <h2 className="text-xl font-bold mb-6">Project Overview</h2>
        <p className="lg:text-lg md:text-md mb-8 leading-relaxed">
          The MyFlix Angular App is a single-page application (SPA) built with
          Angular, allowing users to explore a movie database, register, log in,
          and manage favorite movies. It connects to a REST API for data and
          focuses on delivering a responsive, user-friendly experience.
        </p>

        <img
                  src="src\assets\casestudy_myflixdb_overview.png"
                  className="m-auto w-3-2 h-auto rounded mb-12"
                  alt="myFlixAngularoverview"
                />

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Tech Stack</h2>
          <ul className="lg:text-lg md:text-md mb-4 list-disc list-inside text-center">
            <li>Angular</li>
            <li>Angular Material</li>
            <li>Typescript</li>
            <li>API</li>
            <li>TypeDoc</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Challenges</h2>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>State Management:</strong> Use Trello Kanban board to
            organize tasks and plan the project.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Secure Authentication:</strong> Implementing token-based
            user login and persistence.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>API Integration:</strong> Handling communication with a
            back-end REST API efficiently.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Responsive Design:</strong> Delivering a consistent
            experience across all devices.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Navigation:</strong> Managing routes and navigation for
            seamless user experience.
          </p>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Solutions</h2>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Component-Based Architecture:</strong> Leveraged Angular’s
            modularity for organized state management.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Token-Based Authentication:</strong> Implemented secure
            login using JWT stored in local storage.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>API Services:</strong> Used Angular services to streamline
            HTTP requests and handle data efficiently.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Responsive UI:</strong> Developed a mobile-friendly design
            using Angular Material.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Angular Router:</strong> Utilized Angular Router for smooth
            transitions between views (movies, profile, etc.).
          </p>
        </div>

        {/* Key Features */}
        {/* w-full h-auto on each image to make sure it scales to the container width while maintaining its aspect ratio. */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="w-full bg-gray-600 rounded mb-4">
                <img
                  src="src/assets/casestudy_myflixdb_login.png"
                  className="w-full h-auto rounded"
                  alt="User Registration and Login"
                />
              </div>
              <p className="text-lg font-medium">User Registration and Login</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="w-full bg-gray-600 rounded mb-4">
                <img
                  src="src/assets/casestudy_myflixAngular_movielist.png"
                  className="w-full h-auto rounded"
                  alt="Browse Different Movies"
                />
              </div>
              <p className="text-lg font-medium">Browse Different Movies</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="w-full bg-gray-600 rounded mb-4">
                <img
                  src="src\assets\casestudy_myflixAngular_profile.png"
                  className="w-full h-auto rounded"
                  alt="Manage User Profile"
                />
              </div>
              <p className="text-lg font-medium">Manage User Profile</p>
            </div>

            {/* Row 2 */}
            <div className="col-span-1 sm:col-span-2 bg-gray-800 p-4 rounded-lg text-center">
              <div className="w-full bg-gray-600 rounded mb-4">
                <img
                  src="src/assets/casestudy_myflixdb_moviedetails.png"
                  className="w-full h-auto rounded"
                  alt="View Movie Details"
                />
              </div>
              <p className="text-lg font-medium">View Movie Details</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="w-full bg-gray-600 rounded mb-4">
                <img
                  src="src/assets/casestudy_myflixAngular_favoritemovies.png"
                  className="w-full h-auto rounded"
                  alt="Add/Remove Movies to/from Favorites"
                />
              </div>
              <p className="text-lg font-medium">
                Add/Remove Movies to/from Favorites
              </p>
            </div>
          </div>
        </div>
        {/* Development Stages */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Development Stages</h2>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Planning:</strong> Use Trello Kanban board to organize tasks
            and plan the project.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Setup & Architecture:</strong> Established the Angular
            framework and integrated API.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>User Authentication:</strong> Developed secure login and
            session management.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Movie Catalog:</strong> Implemented movie listing and detail
            view.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Profile Management:</strong> Enabled user profile updates
            and favorite movie tracking.
          </p>
          <p className="lg:text-lg md:text-md mb-4">
            <strong>Final Optimizations:</strong> Focused on UI responsiveness
            and bug fixes.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Conclusion</h2>
          <p className="lg:text-lg md:text-md mb-4">
            The MyFlix Angular App successfully delivers a scalable and
            responsive movie database interface, ensuring a smooth user
            experience with robust authentication and seamless API integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMyFlixDBAngular;
