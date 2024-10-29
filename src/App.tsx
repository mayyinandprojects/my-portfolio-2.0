// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import MainView from './components/MainView';
import CaseStudyMyFlixDBAngular from './components/pages/CaseStudyMyFlixDBAngular'; // Import the new case study page

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* MainView as the home route */}
          <Route path="/" element={<MainView />} />
          {/* Case study page route */}
          <Route path="/casestudy-myflix-angular" element={<CaseStudyMyFlixDBAngular />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;