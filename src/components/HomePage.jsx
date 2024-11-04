import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h1 className="display-4 text-primary mb-2 text-center">Vox Snooker Championship
      </h1> {/* Reduzido mb-4 para mb-2 */}
      <p className="lead text-center mb-4">
        Bem-vindo ao melhor campeonato de bilhar! Competir com os melhores e provar suas habilidades na mesa. Escolha seu time e prepare-se para partidas emocionantes!
      </p>
      <Link to="/setup" className="btn btn-success btn-lg">
        Começar Campeonato
      </Link>
    </div>
  );
}

export default HomePage;
