import React from 'react';

const ConstructorStandings = ({ constructorStandings }) => {
  return (
    <div className="card">
      <h2 className="header">Constructor Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {constructorStandings.map((constructor) => (
            <tr key={constructor.position}>
              <td>{constructor.position}</td>
              <td>{constructor.team}</td>
              <td>{constructor.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructorStandings; 