// src/components/GameSetup.jsx
import React, { useState } from 'react';

function GameSetup({ onTeamSelect }) {
  const [gameMode, setGameMode] = useState('1x1');
  const [teams, setTeams] = useState(['', '', '', '', '']);
  const maxTeams = gameMode === 'championship' ? 5 : 2;

  const handleTeamChange = (index, value) => {
    const updatedTeams = [...teams];
    updatedTeams[index] = value;
    setTeams(updatedTeams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTeams = teams.filter((team) => team.trim() !== '');
    onTeamSelect(selectedTeams, gameMode);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="text-center">Setup Game</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Game Mode:</label>
            <select className="form-select" value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
              <option value="1x1">1 vs 1</option>
              <option value="2x2">2 vs 2</option>
              <option value="championship">Championship</option>
            </select>
          </div>
          {Array.from({ length: maxTeams }).map((_, i) => (
            <div key={i} className="mb-3">
              <label className="form-label">Team {i + 1}:</label>
              <input
                type="text"
                className="form-control"
                value={teams[i]}
                onChange={(e) => handleTeamChange(i, e.target.value)}
                required={i < maxTeams}
              />
            </div>
          ))}
          <button 
            type="submit" 
            className="btn btn-primary w-100" 
            disabled={teams.filter((t) => t.trim() !== '').length < (gameMode === 'championship' ? 3 : 2)}
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
}

export default GameSetup;
