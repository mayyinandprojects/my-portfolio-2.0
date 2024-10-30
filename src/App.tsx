// src/App.tsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Change to HashRouter
import Navbar from "./components/NavBar";
import MainView from "./components/MainView";
import CaseStudyMyFlixDBAngular from "./components/pages/CaseStudyMyFlixDBAngular"; // Import the new case study page

const App: React.FC = () => {
  return (
    // <Router basename="/my-portfolio-2.0"> {/* Remove this if using hashrouter */}
    <Router>
      <Navbar />
      <Routes>
        {/* MainView as the home route */}
        <Route path="/" element={<MainView />} />
        {/* Case study page route */}
        <Route
          path="/casestudy-myflix-angular"
          element={<CaseStudyMyFlixDBAngular />}
        />
      </Routes>
    </Router>
  );
};

export default App;
