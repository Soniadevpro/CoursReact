import React from 'react'
import MonComposantClass from "../components/Bonjour"
import Salutation from "../components/Salut"
import Welcome from '../components/Welcome'
import WelcomeFunc from '../components/WelcomeFunc'
import Compteur from '../components/Compteur'
import Formulaire from '../components/Formulaire'
import OnOff from '../components/OnOff'

// const Bonjour = () => {

//     return <h2>Bonjour</h2>
// }


function App2() {

    return (
        <div>
            <MonComposantClass/> 
            <Salutation/>
            <Welcome/>
            <WelcomeFunc name="Bob" />
            <Compteur/>
            <Formulaire/>
            <OnOff/>
        </div>
    )
    
}



export default App2