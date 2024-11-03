// src/components/MatchSchedule.jsx
import React from 'react';

function MatchSchedule({ matches, recordMatchResult }) {
  const handleResult = (match, winner) => {
    recordMatchResult(match.team1, match.team2, winner);
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <h2 className="mb-4">Match Schedule</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Match</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? matches.map((match, index) => (
            <tr key={index}>
              <td>{match.team1} vs {match.team2}</td>
              <td>
                <button className="btn btn-success me-2" onClick={() => handleResult(match, 1)}>Team 1 Wins</button>
                <button className="btn btn-danger me-2" onClick={() => handleResult(match, 2)}>Team 2 Wins</button>
                <button className="btn btn-secondary" onClick={() => handleResult(match, 0)}>Draw</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="2" className="text-center">No Matches Scheduled</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MatchSchedule;
