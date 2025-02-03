import { useState } from "react";
import React from "react";
// avec hook
// export default function Compteur() {
  
//   const [count, setCount] = useState(0);

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h1 className="text-xl font-bold">Compteur : {count}</h1>
//       <div className="flex gap-4 mt-2">
//         <button 
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => setCount(count + 1)}
//         >
//           Incrémenter
//         </button>
//         <button 
//           className="px-4 py-2 bg-red-500 text-white rounded"
//           onClick={() => setCount(count - 1)}
//         >
//           Décrémenter
//         </button>
//       </div>
//     </div>
//   );
// }




export default class Counter extends React.Component {
  // Constructeur de la classe
  constructor(props) {
      // Appel du constructeur de la classe parente (React.Component) avec les props
      super(props);
      // Initialisation du state avec une propriété "count" définie à 0
      this.state = { count: 0 };
  }

  // Méthode pour incrémenter la valeur de "count" dans le state
  incrementCount() {
      // Utilisation de setState pour mettre à jour la valeur de "count" en l'augmentant de 1
      this.setState({ count: this.state.count + 1 });
  }

  // Méthode render pour définir ce que le composant doit afficher
  render() {
      return (
          // Conteneur principal
          <div>
              {/* Affichage de la valeur actuelle de "count" du state*/}
              <div>Count: {this.state.count}</div>
              {/* Bouton qui, lorsqu'il est cliqué, appelle la méthode incrementCount pour augmenter le compteur*/}
              <button onClick={() => this.incrementCount()}>Incrémenter</button>
          </div>
      );
  }
}
