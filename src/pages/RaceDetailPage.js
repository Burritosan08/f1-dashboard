import React from 'react';
import { useParams, Link } from 'react-router-dom';
import RaceDetail from '../components/RaceDetail';
import data2022 from '../data/data2022';
import data2023 from '../data/data2023';
import data2024 from '../data/data2024';

const RaceDetailPage = () => {
  const { season, raceId } = useParams();
  
  const getSeasonData = () => {
    const seasonNumber = parseInt(season, 10);
    switch (seasonNumber) {
      case 2022:
        return data2022;
      case 2023:
        return data2023;
      case 2024:
      default:
        return data2024;
    }
  };
  
  const seasonData = getSeasonData();
  const race = seasonData.races.find(r => r.id === parseInt(raceId, 10));
  
  return (
    <div className="container">
      <div className="mb-4">
        <Link to="/races" className="header">← Back to Race Calendar</Link>
      </div>
      
      {race ? (
        <RaceDetail race={race} />
      ) : (
        <div className="card">
          <h2 className="header">Race Not Found</h2>
          <p>The requested race could not be found.</p>
        </div>
      )}
    </div>
  );
};

export default RaceDetailPage; 