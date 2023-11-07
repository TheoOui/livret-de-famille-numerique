import { EthProvider } from "./contexts/EthContext";
import CreateLivretFamille from "./components/LivretDeFamille/CreateLivretFamille";
import LivretFamilleDetails from "./components/LivretDeFamille/LivretFamilleDetails";
import AjoutEnfants from "./components/LivretDeFamille/AjoutEnfants";
import ModifierNomParent2 from "./components/LivretDeFamille/ModifierNomParent2";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <CreateLivretFamille />
          <hr />
          <LivretFamilleDetails />
          <hr />
          <AjoutEnfants />
          <hr />
          <ModifierNomParent2 />
          <hr />
          
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
