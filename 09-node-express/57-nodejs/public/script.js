

// Importa il modulo 'express' che permette di creare il server e gestire le richieste HTTP
const express = require('express');

// Crea un'istanza dell'applicazione Express che ci permetterà di configurare e avviare il server
const app = express();


//----------------------------------------------


// Importa il modulo 'fs' (File System) che permette di lavorare con i file nel filesystem
const fs = require('fs');

// Legge il contenuto di un file in modo sincrono ('readFileSync') e lo memorizza nella variabile 'data'
// '/path/to/file' deve essere sostituito con il percorso effettivo del file che vuoi leggere
// 'utf-8' specifica che il file deve essere letto come una stringa di testo (codifica UTF-8)
const data = fs.readFileSync('/path/to/file', 'utf-8');

// Stampa il contenuto del file sulla console
console.log(data);


//----------------------------------------------


// Esempio di lettura asincrona di un file

// Importa il modulo 'fs' (File System) che permette di lavorare con i file nel filesystem
const fs = require('fs');

// Usa la funzione asincrona 'readFile' per leggere il contenuto di un file
// '/path/to/file' deve essere sostituito con il percorso effettivo del file che vuoi leggere
// 'utf-8' specifica la codifica del file (in questo caso, lo leggiamo come una stringa di testo)
fs.readFile('/path/to/file', 'utf-8', (err, data) => {
  // Se si verifica un errore durante la lettura del file, viene lanciato un errore
  if (err) throw err;

  // Se il file viene letto correttamente, il contenuto del file viene stampato sulla console
  console.log(data);
});


//------------------------------------------------------------------------------


// Definisce una funzione asincrona chiamata 'getHello' che recupera dati da un'API

async function getHello() {
  // Usa 'fetch' per fare una richiesta GET all'API specificata (https://api.example.com/hello)
  // 'await' fa sì che il programma aspetti la risposta prima di proseguire
  const response = await fetch('https://api.example.com/hello');
  
  // Una volta ricevuta la risposta, converte i dati in formato JSON
  const data = await response.json();
  
  // Restituisce il messaggio contenuto nella risposta dell'API
  return data.message;
}

// Chiama la funzione 'getHello' e gestisce il risultato usando '.then()' per stampare il messaggio
getHello().then(message => {
  // Stampa il messaggio ottenuto dalla risposta dell'API
  console.log(message);
});
