
function validaForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome == "") {
        alert("Inserisci il tuo nome!");
        return false; // non si scatenerà l'eventuale action presente nella form
    }else if (email == "") {
        alert("Inserisci il tuo indirizzo email!");
        return false;
    }

    //Il codice serve a validare un indirizzo email utilizzando una espressione regolare (RegExp)
    var emailCheck =/^[^@\s]+@[^@\s.]+\.[^@\s.]+$/;

    /* Spiegazione passo dopo passo

    test(email) è un metodo dell'oggetto RegExp in JavaScript.
    Controlla se la stringa email corrisponde all'espressione regolare emailValidityCheck.
    Restituisce true se l'email è valida e false se non lo è.
    Negazione !

    Il punto esclamativo ! nega il valore restituito.
    Se test(email) restituisce false (cioè l'email è non valida), allora !false diventa true, e il codice all'interno dell'if viene eseguito. */
    if(!emailCheck.test(email)) {
        alert("Indirizzo email non valido! Riprova.");
        return false;
    }

    return true;
}