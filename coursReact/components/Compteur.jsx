import { useState } from "react";

// avec hook
export default function Compteur() {
  
  const [count, setCount] = useState(0);


  return (
<>
      <h1 >Compteur : {count}</h1>

        <button 
     
          onClick={() => setCount(count + 1)}
        >
          Incrémenter
        </button>
        <button 
      
          onClick={() => setCount(count - 1)}
        >
          Décrémenter
        </button>
</>
 

  );
}




// export default class Counter extends React.Component {
//   // Constructeur de la classe
//   constructor(props) {
//       // Appel du constructeur de la classe parente (React.Component) avec les props
//       super(props);
//       // Initialisation du state avec une propriété "count" définie à 0
//       this.state = { count: 0 };
//   }

//   // Méthode pour incrémenter la valeur de "count" dans le state
//   incrementCount() {
//       // Utilisation de setState pour mettre à jour la valeur de "count" en l'augmentant de 1
//       this.setState({ count: this.state.count + 1 });
//   }

//   // Méthode render pour définir ce que le composant doit afficher
//   render() {
//       return (
//           // Conteneur principal
//           <div>
//               {/* Affichage de la valeur actuelle de "count" du state*/}
//               <div>Count: {this.state.count}</div>
//               {/* Bouton qui, lorsqu'il est cliqué, appelle la méthode incrementCount pour augmenter le compteur*/}
//               <button onClick={() => this.incrementCount()}>Incrémenter</button>
//           </div>
//       );
//   }
// }
