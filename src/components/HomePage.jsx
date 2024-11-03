// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="display-4 text-primary mb-4">Vox Champions Billiards</h1>
      <p className="lead text-center mb-5">
      Bem-vindo ao melhor campeonato de bilhar! Competir com os melhores e provar suas habilidades na mesa.
      Escolha seu time e prepare-se para partidas emocionantes!
      </p>
      <Link to="/setup" className="btn btn-success btn-lg">
        Start the Championship
      </Link>
    </div>
  );
}

export default HomePage;
