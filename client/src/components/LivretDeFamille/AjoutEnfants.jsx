import React, { useState } from 'react';

function AjoutEnfants() {
  const [nouvelEnfant, setNouvelEnfant] = useState('');

  const handleAjouterEnfant = () => {
    // Envoyez une transaction pour ajouter un nouvel enfant au livret de famille
    // Utilisez Web3.js ou ethers.js pour interagir avec le contrat intelligent ici
  };

  return (
    <div>
      <h2>Ajouter un Enfant</h2>
      <input
        type="text"
        placeholder="Nom de l'Enfant"
        value={nouvelEnfant}
        onChange={(e) => setNouvelEnfant(e.target.value)}
      />
      <button onClick={handleAjouterEnfant}>Ajouter Enfant</button>
    </div>
  );
}

export default AjoutEnfants;
