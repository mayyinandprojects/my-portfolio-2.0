import React from 'react';
import Navbar from './components/NavBar';
import MainView from './components/MainView';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <MainView />
    </div>
  );
};

export default App;
