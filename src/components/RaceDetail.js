import React from 'react';

const RaceDetail = ({ race }) => {
  if (!race) return <div className="card">Race not found</div>;

  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return '';
    const dateTime = new Date(dateTimeStr);
    return `${dateTime.toLocaleDateString()} - ${dateTime.toLocaleTimeString()}`;
  };

  return (
    <div className="card">
      <h2 className="header">{race.name}</h2>
      
      <div className="flex flex-col gap-4">
        <div>
          <p><strong>Circuit:</strong> {race.circuit}</p>
          <p><strong>Location:</strong> {race.location}</p>
          <p><strong>Date:</strong> {new Date(race.date).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {race.status === 'completed' ? 'Completed' : 'Upcoming'}</p>
        </div>
        
        {race.status === 'completed' ? (
          <div>
            <h3 className="header">Race Results</h3>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Driver</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {race.results.map((result) => (
                  <tr key={result.position}>
                    <td>{result.position}</td>
                    <td>{result.driver}</td>
                    <td>{result.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3 className="header">Race Schedule</h3>
            <table>
              <tbody>
                <tr>
                  <td><strong>Practice 1:</strong></td>
                  <td>{formatDateTime(race.schedule.practice1)}</td>
                </tr>
                <tr>
                  <td><strong>Practice 2:</strong></td>
                  <td>{formatDateTime(race.schedule.practice2)}</td>
                </tr>
                <tr>
                  <td><strong>Practice 3:</strong></td>
                  <td>{formatDateTime(race.schedule.practice3)}</td>
                </tr>
                <tr>
                  <td><strong>Qualifying:</strong></td>
                  <td>{formatDateTime(race.schedule.qualifying)}</td>
                </tr>
                <tr>
                  <td><strong>Race:</strong></td>
                  <td>{formatDateTime(race.schedule.race)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RaceDetail; 