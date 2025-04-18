import React, { useState } from 'react';
import SeasonSelector from '../components/SeasonSelector';
import DriverStandings from '../components/DriverStandings';
import ConstructorStandings from '../components/ConstructorStandings';
import data2022 from '../data/data2022';
import data2023 from '../data/data2023';
import data2024 from '../data/data2024';

const StandingsPage = () => {
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
      <h1 className="header">Formula 1 Championship Standings</h1>
      <SeasonSelector
        selectedSeason={selectedSeason}
        onSeasonChange={setSelectedSeason}
      />
      
      <div className="flex flex-col gap-4">
        <DriverStandings driverStandings={seasonData.driverStandings} />
        <ConstructorStandings constructorStandings={seasonData.constructorStandings} />
      </div>
    </div>
  );
};

export default StandingsPage; 