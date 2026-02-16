
// Importazione di React
import React from "react";

// Definizione del componente Greeting
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>; // Mostra un saluto con il nome passato come prop
}

export default Greeting; // Esportazione del componente per poterlo usare altrove