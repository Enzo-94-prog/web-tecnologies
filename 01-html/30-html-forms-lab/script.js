
/*
    Il codice JavaScript utilizza l'oggetto XMLHttpRequest per effettuare una richiesta GET 
    all'URL "https://google.com". Tuttavia, questa richiesta molto probabilmente fallirà a 
    // causa di CORS (Cross-Origin Resource Sharing), perché Google non permette richieste 
    // da domini esterni con XMLHttpRequest.

    SERVIREBBE UN bearer token (portatore di token, colui a cui e consentita la richiesta)

*/

/*
    L'URL della richiesta è "https://google.com", ma la maggior parte dei siti web bloccano 
    richieste dirette via XHR se non provengono dallo stesso dominio.
 */
var url = "https://google.com"; 

/* Creazione dell'oggetto XMLHttpRequest: Questo oggetto viene utilizzato per inviare 
richieste HTTP in JavaScript. */ 
var xhr = new XMLHttpRequest();

/* Apertura della connessione:Il metodo open() inizializza la richiesta con il metodo GET 
e l'URL specificato. */ 
xhr.open("GET", url);

/* Gestione della risposta: 
xhr.onreadystatechange è una funzione chiamata ogni volta che cambia lo stato della richiesta.
xhr.readyState === 4 indica che la richiesta è completata.
xhr.status mostra il codice di stato HTTP (es. 200 per successo, 404 per non trovato).
xhr.responseText contiene la risposta del server.
 */
xhr.onreadystatechange = function() {

    if(xhr.readyState === 4) {

        console.log(xhr.status);
        console.log(xhr.responseText);

    }
}

/* Invio della richiesta: Questo invia la richiesta al server. */
xhr.send();