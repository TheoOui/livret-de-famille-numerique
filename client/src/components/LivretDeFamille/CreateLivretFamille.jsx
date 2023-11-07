import React, { useState, useEffect } from 'react';
import Web3 from 'web3'; // Importez la bibliothèque Web3.js
import { EthContext, useEth } from '../contexts/EthContext';

import LivretDeFamilleContract from '../contracts/LivretDeFamille.json';


require("dotenv").config();



  function CreateLivretFamille() {
    const [parent1, setParent1] = useState('');
    const [parent2, setParent2] = useState('');
    const [contractData, setContractData] = useState({}); // Pour stocker les données du contrat
    const {state} = useEth(EthContext);

  
    useEffect(() => {
      // Chargez les données du contrat lorsque le composant est monté
      const loadContractData = async () => {
        try {
          const nomParent1 = await contract.methods.nomParent1().call();
          const nomParent2 = await contract.methods.nomParent2().call();
          const nombreEnfants = await contract.methods.nombreEnfants().call();
          const owner = await contract.methods.owner().call();
  
          setContractData({
            nomParent1,
            nomParent2,
            nombreEnfants,
            owner,
          });
        } catch (error) {
          console.error('Erreur lors du chargement des données du contrat :', error);
        }
      };
  
      loadContractData();
    }, []);
  
    const handleCreateLivret = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const accounts = await Web3.eth.getAccounts();
  
          const transaction = await contract.methods.createLivret(parent1, parent2).send({ from: accounts[0] });
  
          console.log('Transaction hash:', transaction.transactionHash);
  
          // Mettre à jour les données du contrat après la création du livret
          const nomParent1 = await contract.methods.nomParent1().call();
          const nomParent2 = await contract.methods.nomParent2().call();
          const nombreEnfants = await contract.methods.nombreEnfants().call();
          const owner = await contract.methods.owner().call();
  
          setContractData({
            nomParent1,
            nomParent2,
            nombreEnfants,
            owner,
          });
        } else {
          console.error('Le navigateur ne prend pas en charge Ethereum');
        }
      } catch (error) {
        console.error('Erreur lors de la création du livret de famille :', error);
      }
    };
  
    return (
      <div>
        <h2>Créer un Livret de Famille</h2>
        <input
          type="text"
          placeholder="Nom de Parent1"
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
  
        {/* Bouton pour afficher les données du contrat */}
        <button onClick={() => console.log(contractData)}>Afficher les données du contrat</button>
      </div>
    );
  }
  
  export default CreateLivretFamille;
  
