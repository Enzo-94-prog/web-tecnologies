

/* definizione di una funzione anonima assegnata a una variabile */
const quadrato = function(x) {
    return x * x;
};

/* definizione di una funzione nominata (assegnata a una variabile) il cui valore di ritorno 
viene memorizzato nella variabile quadrato_ */
const quadrato_ = function calcolaQuadrato(x) { 
    return x * x; 
};


/* Sintassi di base di una Arrow Function */

/* Invece di utilizzare la keyword function per definire una funzione, si utilizza la 
   sintassi: () => {}   */
(parametro1, parametro2) => { //, parametro3,...
    // blocco di codice da eseguire
}

// funzione tradizionale
function quadrato2(x) {
    return x * x;
}
// arrow function equivalente
const quadrato3 = (x) => {x * x};
    

/* Esempi pratici di manipolazione del DOM: */

// Seleziona l'elemento con ID uguale a "header" e cambia il colore di sfondo
var header = document.getElementById("header");
header.style.backgroundColor = "red";
console.log("Colore TESTO DI PROVA:")
console.log(header.style.backgroundColor)


// Seleziona tutti gli elementi con la classe "box" e applica un bordo nero
var boxes = document.getElementsByClassName("box");
for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.border = "1px solid black";
}


// Seleziona tutti i paragrafi figli diretti di un elemento con ID "main" e ne modifica la dimensione del font
var paragraphs = document.querySelectorAll("#main > p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "16px";
}


/* Proprietà per manipolare il contenuto */
var element = document.getElementById("header");

// element.innerHTML non deve essere un commento per vedere la modifica nel DOM
//element.innerHTML = "<p> Nuovo contenuto HTML </p>";
element.style.border = "1px solid blue";





    