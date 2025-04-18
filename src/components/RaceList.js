import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RaceList = ({ races, season }) => {
  const [filter, setFilter] = useState('all');
  
  const filteredRaces = filter === 'all' 
    ? races 
    : races.filter(race => race.status === filter);

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="header">Race Calendar {season}</h2>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Races</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Grand Prix</th>
            <th>Circuit</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRaces.map((race) => (
            <tr key={race.id}>
              <td>{race.id}</td>
              <td>
                <Link to={`/races/${season}/${race.id}`}>
                  {race.name}
                </Link>
              </td>
              <td>{race.circuit}</td>
              <td>{new Date(race.date).toLocaleDateString()}</td>
              <td>
                <span style={{ color: race.status === 'completed' ? '#4CAF50' : '#FFC107' }}>
                  {race.status === 'completed' ? 'Completed' : 'Upcoming'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceList; 