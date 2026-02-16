

// Importazione di React
import React from "react";

// Importazione dei Componenti Necessari
import Titolo from "./components/Titolo";
import Greeting from "./components/Greeting";



// Utilizzo dei componenti all'interno di App
function App() {
    return (
        <div>
            <Titolo testo="Benvenuto su React!" />
            <Greeting name="Alice" />
        </div>
    );
}

export default App; 



