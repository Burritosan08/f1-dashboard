import React from 'react';

const SeasonSelector = ({ selectedSeason, onSeasonChange }) => {
  const seasons = [2022, 2023, 2024];

  return (
    <div className="season-selector">
      {seasons.map(season => (
        <button
          key={season}
          className={`season-btn ${selectedSeason === season ? 'active' : ''}`}
          onClick={() => onSeasonChange(season)}
        >
          {season}
        </button>
      ))}
    </div>
  );
};

export default SeasonSelector; 