import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SeasonSelector from '../components/SeasonSelector';
import RaceList from '../components/RaceList';
import data2022 from '../data/data2022';
import data2023 from '../data/data2023';
import data2024 from '../data/data2024';

const RacesPage = () => {
  const [selectedSeason, setSelectedSeason] = useState(2024);
  
  const getSeasonData = () => {
    switch (selectedSeason) {
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
  
  return (
    <div className="container">
      <h1 className="header">Formula 1 Race Calendar</h1>
      <SeasonSelector
        selectedSeason={selectedSeason}
        onSeasonChange={setSelectedSeason}
      />
      
      <RaceList races={seasonData.races} season={selectedSeason} />
    </div>
  );
};

export default RacesPage; 