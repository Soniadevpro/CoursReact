import React from 'react' /*module intégré à react*/
// import './App.css'

function App() {
 

  // return React.createElement('h1', {className : 'title'}, 'Bonjour, React') Version sans JSX

  return ( 
    <div>

    {React.createElement('h1', null, "Bienvenu à React createElement")} {/* Version createElement JS */}
   <h1>Bienvenu à React</h1> {/* JSX */}

 
<Bonjour/>
    </div>  
   
    
  )
}

export default App
