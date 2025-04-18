import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StandingsPage from './pages/StandingsPage';
import RacesPage from './pages/RacesPage';
import RaceDetailPage from './pages/RaceDetailPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<StandingsPage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/races/:season/:raceId" element={<RaceDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 