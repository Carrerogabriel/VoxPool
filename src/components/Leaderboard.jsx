// src/components/Leaderboard.jsx
import React from 'react';

function Leaderboard({ leaderboard }) {
  const calculatePercentage = (wins, games) => {
    return games === 0 ? 0 : ((wins / games) * 100).toFixed(2);
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <h2 className="text-center mb-4">Leaderboard</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Team</th>
            <th>Games</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>Win %</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{entry.team}</td>
              <td>{entry.games}</td>
              <td>{entry.wins}</td>
              <td>{entry.draws}</td>
              <td>{entry.losses}</td>
              <td>{calculatePercentage(entry.wins, entry.games)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
