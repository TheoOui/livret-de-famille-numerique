const LivretDeFamille = artifacts.require("LivretDeFamille");

module.exports = function (deployer) {
  deployer.deploy(LivretDeFamille, "NomParent1", "NomParent2");
};
