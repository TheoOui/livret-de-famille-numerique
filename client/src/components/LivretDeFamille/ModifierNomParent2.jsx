import React, { useState } from 'react';

function ModifierNomParent2() {
  const [nouveauNom, setNouveauNom] = useState('');

  const handleModifierNomParent2 = () => {
    // Envoyez une transaction pour modifier le nom de Parent2 dans le livret de famille
    // Utilisez Web3.js ou ethers.js pour interagir avec le contrat intelligent ici
  };

  return (
    <div>
      <h2>Modifier le Nom de Parent2</h2>
      <input
        type="text"
        placeholder="Nouveau Nom de Parent2"
        value={nouveauNom}
        onChange={(e) => setNouveauNom(e.target.value)}
      />
      <button onClick={handleModifierNomParent2}>Modifier Nom</button>
    </div>
  );
}

export default ModifierNomParent2;
