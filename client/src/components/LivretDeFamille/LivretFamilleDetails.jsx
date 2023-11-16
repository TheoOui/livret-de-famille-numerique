// Importez les bibliothèques nécessaires
import React from 'react';
import CreateLivretFamille from './CreateLivretFamille';

function LivretFamilleDetails({ parent1, parent2 }) {
  return (
    <div>
      <h2>Détails du Livret de Famille</h2>
      <p>Parent 1: {parent1}</p>
      <p>Parent 2: {parent2}</p>
      {/* ... (ajoutez d'autres détails du livret de famille si nécessaire) */}
    </div>
  );
}

export default LivretFamilleDetails;
