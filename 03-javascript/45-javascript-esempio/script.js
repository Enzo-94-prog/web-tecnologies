

/* Il codice di seguito rappresenta un semplice gioco "Indovina il numero" che mette 
alla prova le abilità di logica e di conteggio dell'utente. Il codice JavaScript 
è la parte interattiva della pagina che gestisce la logica del gioco "Indovina il
numero". In particolare, genera un numero casuale tra 1 e 100, tiene traccia del 
numero di tentativi fatti dall'utente, imposta il numero massimo di tentativi e il 
tempo massimo per indovinare il numero, avvia il timer e definisce una funzione per 
verificare il tentativo dell'utente. */

// Generazione del numero casuale tra 1 e 100
var numeroMisterioso = Math.floor(Math.random() * 100) + 1;
// Contatore dei tentativi fatti
var numTentativi = 0;
// Numero massimo di tentativi consentiti
var maxTentativi = 10;
// Tempo massimo per indovinare il numero in secondi
var tempoMassimo = 30;
// Tempo rimanente
var tempoRimanente = tempoMassimo;
// Intervallo del timer
var timerInterval;
// Recupero dell'input dell'utente
var inputTentativo = document.getElementById("tentativo");

// Aggiunta dell'evento "keypress" sull'input
inputTentativo.addEventListener("keypress", function(event) {
    // Verifica se il tasto premuto è il tasto "Invio"
    if (event.keyCode === 13) {
        verificaTentativo();
    }
});

// Funzione per verificare il tentativo
function verificaTentativo() {
    // Incremento del numero di tentativi fatti
    numTentativi++;

    // Recupero del valore inserito dall'utente
    var valoreTentativo = parseInt(inputTentativo.value);

    // Verifica se il valore inserito è un numero valido
    if (isNaN(valoreTentativo)) {
        document.getElementById("risultato").innerHTML = "Devi inserire un numero!";
    } else if (valoreTentativo < 1 || valoreTentativo > 100) {
        document.getElementById("risultato").innerHTML = "Il numero deve essere compreso tra 1 e 100!";
    } else {
        // Verifica se il numero inserito è corretto
        if (valoreTentativo === numeroMisterioso) {
            clearInterval(timerInterval);
            document.getElementById("risultato").innerHTML = "Hai indovinato il numero in " + numTentativi + " tentativi!";
            inputTentativo.disabled = true;
        } else {
            var messaggioRisultato = "Il numero è ";
            var iconaRisultato = "";

            if (valoreTentativo < numeroMisterioso) {
                messaggioRisultato += "più alto.";
                iconaRisultato = '<i class="fas fa-arrow-up"></i>';
            } else {
                messaggioRisultato += "più basso.";
                iconaRisultato = '<i class="fas fa-arrow-down"></i>';
            }

            document.getElementById("risultato").innerHTML = messaggioRisultato + iconaRisultato;
        }

        // Verifica se il numero massimo di tentativi è stato raggiunto
        if (numTentativi >= maxTentativi) {
            clearInterval(timerInterval);
            document.getElementById("risultato").innerHTML = "Hai esaurito i tentativi!";
            inputTentativo.disabled = true;
        }
    }

    // Aggiornamento del numero di tentativi effettuati
    var numTentativiElement = document.getElementById("num-tentativi");
    numTentativiElement.innerHTML = numTentativi;

    // Azzeramento del valore dell'input
    inputTentativo.value = "";
}

// Funzione per aggiornare il timer
function aggiornaTimer() {
    tempoRimanente--;

    if (tempoRimanente <= 0) {
        clearInterval(timerInterval);
        document.getElementById("risultato").innerHTML = "Tempo scaduto!";
        document.getElementById("tentativo").disabled = true;
    } else {
        document.getElementById("timer").innerHTML = tempoRimanente + "s";
    }
}

// Avvio del timer
timerInterval = setInterval(aggiornaTimer, 1000);
