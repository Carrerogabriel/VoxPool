// src/components/Leaderboard.jsx
import React from 'react';

function Leaderboard({ leaderboard }) {
  const calculatePercentage = (wins, games) => {
    return games === 0 ? 0 : ((wins / games) * 100).toFixed(2);
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <h2 className="text-center mb-4">Tabela</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Equipes</th>
            <th>Jogos</th>
            <th>Vitorias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Estatistica %</th>
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
