// import { useState } from "react";

// export default function Formulaire() {
//   const [nom, setNom] = useState("");

//   return (
//     <div className="flex flex-col items-center p-4">
//       <input 
//         type="text" 
//         className="border p-2"
//         placeholder="Entrez votre nom"                               HOOK VERSION
//         value={nom}
//         onChange={(e) => setNom(e.target.value)}
//       />
//       <p className="mt-2">Bonjour, {nom} !</p>
//     </div>
//   );
// }
import  { Component } from "react";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: ""
    };
  }

  handleChange = (event) => {
    console.log(event)
    this.setState({ nom: event.target.value });
  };

  render() {
    return (
      <div className="flex flex-col items-center p-4">
        <input 
          type="text" 
          className="border p-2"
          placeholder="Entrez votre nom"
          value={this.state.nom}
          onChange={this.handleChange}
        />
        <p className="mt-2">Bonjour, {this.state.nom} !</p>
      </div>
    );
  }
}

export default Formulaire;