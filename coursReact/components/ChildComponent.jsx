
const ChildComponent = ({ onButtonClick }) => {
  return (
    <>
      <h3>Composant Enfant</h3>
      {/* Le bouton utilise la méthode reçue en prop comme gestionnaire d'événements */}
      <button onClick={onButtonClick}>Cliquez-moi</button>
    </>
  );
};



export default ChildComponent;
