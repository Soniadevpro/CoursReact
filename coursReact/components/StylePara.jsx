

const StyledPara = () => {
  const styles = {
    color: "violet",
    fontSize: "30px" 
  };

  return (
<>

  <p style={styles}>Créez un composant qui affiche un paragraphe de texte.
Utilisez des styles en ligne pour définir la couleur du texte et la taille de la police</p>

<p style={{ color: "black", fontSize: "24px" }} >Ceci est un paragraphe stylisé avec des styles en ligne.</p>
</>
  )
  
};

export default StyledPara;
