// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GameSetup from './components/GameSetup';
import MatchSchedule from './components/MatchSchedule';
import Leaderboard from './components/Leaderboard';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Importando o CSS global

function App() {
  const [teams, setTeams] = useState([]);
  const [gameMode, setGameMode] = useState('1x1');
  const [matches, setMatches] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  const handleTeamSelection = (selectedTeams, selectedGameMode) => {
    setTeams(selectedTeams);
    setGameMode(selectedGameMode);
    initializeLeaderboard(selectedTeams);
    generateMatchSchedule(selectedTeams, selectedGameMode);
  };

  const initializeLeaderboard = (selectedTeams) => {
    const initialLeaderboard = selectedTeams.map((team) => ({
      team,
      games: 0,
      wins: 0,
      losses: 0,
      draws: 0,
    }));
    setLeaderboard(initialLeaderboard);
  };

  const generateMatchSchedule = (selectedTeams, selectedGameMode) => {
    const schedule = [];
    if (selectedGameMode === 'championship') {
      for (let i = 0; i < selectedTeams.length; i++) {
        for (let j = i + 1; j < selectedTeams.length; j++) {
          schedule.push({ team1: selectedTeams[i], team2: selectedTeams[j], winner: null });
        }
      }
    } else {
      schedule.push({ team1: selectedTeams[0], team2: selectedTeams[1], winner: null });
    }
    setMatches(schedule);
  };

  const recordMatchResult = (team1, team2, winner) => {
    const updatedLeaderboard = leaderboard.map((entry) => {
      if (entry.team === team1) {
        return {
          ...entry,
          games: entry.games + 1,
          wins: entry.wins + (winner === 1 ? 1 : 0),
          losses: entry.losses + (winner === 2 ? 1 : 0),
          draws: entry.draws + (winner === 0 ? 1 : 0),
        };
      }
      if (entry.team === team2) {
        return {
          ...entry,
          games: entry.games + 1,
          wins: entry.wins + (winner === 2 ? 1 : 0),
          losses: entry.losses + (winner === 1 ? 1 : 0),
          draws: entry.draws + (winner === 0 ? 1 : 0),
        };
      }
      return entry;
    });

    setLeaderboard(updatedLeaderboard);
    setMatches((prevMatches) => prevMatches.filter(match => !(match.team1 === team1 && match.team2 === team2)));
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div 
            className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
         
                </li>
              </ul>
            </div>
         
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/setup" element={<GameSetup onTeamSelect={handleTeamSelection} />} />
            <Route path="/schedule" element={<MatchSchedule matches={matches} recordMatchResult={recordMatchResult} />} />
            <Route path="/leaderboard" element={<Leaderboard leaderboard={leaderboard} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
