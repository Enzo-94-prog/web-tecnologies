

// Importa il modulo express per creare il server
const express = require('express');

// Crea una nuova applicazione Express
const app = express();



//--------------------------------- Axios ----------------------------------------

// Importa il modulo axios per effettuare richieste HTTP 
/* La libreria axios non è inclusa di default in Node.js, quindi prima di poterla usare, 
   devi installarla tramite npm install axios */
const axios = require('axios');

// Effettua una richiesta GET all'API pubblica JSONPlaceholder per ottenere i post
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => { /* Axios converte automaticamente il file JSON ricevuto dal server 
                           remoto in un oggetto JavaScript */
        
                           // Se la richiesta ha successo, stampa i dati ricevuti (un array di post)
        console.log(response.data); // Si accede direttamente con .data
    })
    .catch(error => {
        // Se si verifica un errore, stampa l'errore nella console
        console.log(error);
    });


  