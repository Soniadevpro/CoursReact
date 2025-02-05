
import ChildComponent from "./ChildComponent"; // Importation du composant enfant depuis un fichier séparé

// Composant Parent
const ParentComponent = () => {
  // Méthode qui sera appelée lorsque le bouton du composant enfant est cliqué
  const handleClick = () => {
    console.log("Bouton cliqué dans ChildComponent !");
  };

  return (
    <>
      <h2>Composant Parent</h2>
      {/* Passage de la méthode handleClick en tant que prop au composant enfant */}
      <ChildComponent onButtonClick={handleClick} />
    </>
  );
};

export default ParentComponent;
