// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LivretDeFamille {
    string public nomParent1;
    string public nomParent2;
    uint256 public nombreEnfants;
    address public owner;  // Ajout d'une variable pour suivre le propriétaire du contrat

    constructor(string memory _nomParent1, string memory _nomParent2) {
        nomParent1 = _nomParent1;
        nomParent2 = _nomParent2;
        nombreEnfants = 0;
        owner = msg.sender;  // Définir le créateur du contrat comme propriétaire
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Seul le proprietaire peut appeler cette fonction.");
        _;
    }

    function ajouterEnfant() public onlyOwner {
        nombreEnfants++;
    }

    function modifierNomParent2(string memory _nouveauNom) public onlyOwner {
        nomParent2 = _nouveauNom;
    }
    function createLivret(string memory _nomParent1, string memory _nomParent2) public {
        
        
    }
}
