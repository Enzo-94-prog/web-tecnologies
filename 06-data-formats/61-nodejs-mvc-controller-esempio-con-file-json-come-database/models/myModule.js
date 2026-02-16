


/* ----------------------Module ------------------------ */

// Definiamo una funzione all'interno del nostro modulo
function myFunction() {
    console.log('Hello, world!');
 }
    // Esportiamo la funzione tramite module.exports
module.exports = myFunction;



// Importiamo la funzione dal nostro modulo
const myFunction = require('./myModule');
// Utilizziamo la funzione
myFunction(); // Output: "Hello, world!"



// Esportiamo le funzioni tramite module.exports
function myFunction() {
    console.log('Hello World');
}
    function anotherFunction() {
    console.log('Hello World2');
}

module.exports = myFunction,anotherFunction;



// Esportiamo un oggetto con i moduli correlati
const myModule = {
    method1() { console.log('method 1'); },
    method2() { console.log('method 2'); },
    method3() { myModule.method2();console.log('method 3'); }
};

module.exports = myModule;



// Esportiamo una classe
class MyClass {
    constructor() {
    
        this.myProperty = 'Hello World';
    }
    
    myMethod() {
    
        console.log(this.myProperty);
    }
}

module.exports = MyClass;




