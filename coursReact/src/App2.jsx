
// import MonComposantClass from "../components/Bonjour"
// import Salutation from "../components/Salut"
// import Welcome from '../components/Welcome'
// import WelcomeFunc from '../components/WelcomeFunc'
// import Compteur from '../components/Compteur'
// import Formulaire from '../components/Formulaire'
// import OnOff from '../components/OnOff'

import TaskList from "../components/TaskList"
import RegisterForm from "../../07.tache/Formulaire"
import ParentComponent from "../components/ParentComponent"
import StyledPara from "../components/stylePara"

// import HoverButton from "../components/MyButton"
import StyleButton from "../components/StyleButton"


// const Bonjour = () => {

//     return <h2>Bonjour</h2>
// }


function App2() {

    return (
        <div>
            {/* <MonComposantClass/> 
            <Salutation/>
            <Welcome/>
            <WelcomeFunc name="Bob" /> */}
            {/* <Compteur/> */}
            {/* <Formulaire/> */}
            {/* <OnOff/> */}
            <TaskList/>
            <RegisterForm/> 
            <ParentComponent/>
            <StyledPara/>
            {/* <HoverButton/> */}
            <StyleButton/>
          
        </div>
    )
    
}



export default App2