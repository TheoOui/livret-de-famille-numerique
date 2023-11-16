// Importez les bibliothèques nécessaires
import React, { useState, useEffect } from 'react';
import { EthContext, useEth } from './../../contexts/EthContext';
import LivretDeFamilleContract from '../../contracts/LivretDeFamille.json';
import LivretFamilleDetails from './LivretFamilleDetails';

function CreateLivretFamille() {
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [contractData, setContractData] = useState({});
  const { state } = useEth(EthContext);

  // Chargez les données du contrat lorsque le composant est monté
  const loadContractData = async () => {
    try {
      const nomParent1 = await state.contract.methods.nomParent1().call();
      const nomParent2 = await state.contract.methods.nomParent2().call();
      const nombreEnfants = await state.contract.methods.nombreEnfants().call();
      const owner = await state.contract.methods.owner().call();

      setContractData({
        parent1: nomParent1,
        parent2: nomParent2,
        nombreEnfants,
        owner,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des données du contrat :', error);
    }
  };

  useEffect(() => {
    loadContractData();
  }, []); // Assurez-vous que cette dépendance est correcte

  const handleCreateLivret = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.enable();

        const transaction = await state.contract.methods.createLivret(parent1, parent2).send({ from: state.accounts[0] });

        console.log('Transaction hash:', transaction.transactionHash);
        console.log('Prénoms lors de la création du livret :', parent1, parent2);
        // Mettre à jour les données du contrat après la création du livret
        await loadContractData();
      } else {
        console.error('Le navigateur ne prend pas en charge Ethereum');
      }
    } catch (error) {
      console.error('Erreur lors de la création du livret de famille :', error);
    }
    
  };
  const handleDisplayContractData = async () => {
    console.log("test") ;
    console.log('Prénoms lors de la création du livret :', parent1, parent2);

    // Appelez simplement la fonction loadContractData pour mettre à jour les détails du contrat
    loadContractData(); }
    
    

  return (
    <div>
      <h2>Créer un Livret de Famille</h2>
      <input
        type="text"
        placeholder="Nom du Parent1"
        value={parent1}
        onChange={(e) => setParent1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom de Parent2"
        value={parent2}
        onChange={(e) => setParent2(e.target.value)}
      />
      <button onClick={handleCreateLivret}>Créer Livret</button>




      
    </div>
  );
}

export default CreateLivretFamille;
