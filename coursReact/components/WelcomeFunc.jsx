import React from 'react';

function WelcomeFunc(props) {
  console.log(props); // Vérifie les props reçues dans la console
  return <h1>Bonjour {props.name}</h1>;
}

export default WelcomeFunc;