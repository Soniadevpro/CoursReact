import { useState } from "react";

export default function Formulaire() {
  const [nom, setNom] = useState("");

  return (
    <div className="flex flex-col items-center p-4">
      <input 
        type="text" 
        className="border p-2"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <p className="mt-2">Bonjour, {nom} !</p>
    </div>
  );
}
