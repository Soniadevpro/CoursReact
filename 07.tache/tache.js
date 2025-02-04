const fruits = ["pomme", "banane", "cerise"];
const legumes = ["carotte", "brocoli"];

const aliments = [...fruits, ...legumes];

console.log(aliments);

// Ajout d'éléments

const nombres = [1, 2, 3];
const nouveauxNombres = [...nombres, 4, 5, 6];

console.log(nouveauxNombres);
console.log(nombres);

// Clonaged'objets

const voiture = { marque: "Toyota", modèle: "Corolla" };
const nouvelleVoiture = { ...voiture, couleur: "rouge" };

console.log(nouvelleVoiture);

// Fusion d'objets
const infosPersonnelles = { nom: "Dupont", prénom: "Jean" };
const infosContact = { email: "jean.dupont@email.com", téléphone: "0123456789" };

const infosComplètes = { ...infosPersonnelles, ...infosContact };

console.log(infosComplètes);
