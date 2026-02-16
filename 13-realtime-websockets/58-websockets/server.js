


/* Commento sul codice:
Struttura e funzionamento

Il codice avvia un server HTTP usando Express sulla porta 3002 per evitare conflitti.
Usa la libreria ws per creare un server WebSocket che utilizza lo stesso server HTTP.
Ogni volta che un client si connette, il server WebSocket gestisce l'evento e stampa un 
messaggio di connessione.
Il server riceve i messaggi dal client e risponde con un messaggio che ripete quello 
ricevuto.
Quando il client si disconnette, il server stampa un messaggio di avviso. */

const express = require('express'); // Importa il framework Express
const WebSocket = require('ws'); // Importa la libreria WebSocket

const app = express(); // Crea un'applicazione Express


// Avvia il server HTTP sulla porta 3002
const server = app.listen(3002, () => {
    console.log('Server web avviato');
});


// Crea un server WebSocket utilizzando il server HTTP esistente
const wsServer = new WebSocket.Server({ server });

// Gestisce la connessione dei client WebSocket
wsServer.on('connection', (socket) => {
    console.log('Client connesso');

    // Ascolta i messaggi ricevuti dal client WebSocket
    socket.on('message', (message) => {
        console.log('Messaggio ricevuto:', message);
        // Invia il messaggio di risposta al client
        socket.send(`Hai detto: ${message}`);
    });

    // Gestisce la chiusura della connessione del client
    socket.on('close', () => {
        console.log('Client disconnesso');
    });
});


// Crea un client WebSocket che si connette al server
const socket = new WebSocket('ws://localhost:3002');

// Evento che si attiva quando la connessione al server WebSocket è aperta
socket.onopen = () => {
    console.log('Connesso al server WebSocket');
    // Invia un messaggio al server WebSocket
    socket.send('Ciao server WebSocket!');
};

// Evento che gestisce i messaggi ricevuti dal server
socket.onmessage = (event) => {
    console.log('Messaggio ricevuto dal server:', event.data);
};

// Evento che si attiva quando la connessione WebSocket viene chiusa
socket.onclose = () => {
    console.log('Connessione al server WebSocket chiusa');
};


/* Output:

C:\Users\enzom\OneDrive\Unipegaso\3° ANNO\Tecnologie Web\Visual Studio Code - Workspace\58 - WebSockets>npm instal ws

added 1 package, and audited 71 packages in 3s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\enzom\OneDrive\Unipegaso\3° ANNO\Tecnologie Web\Visual Studio Code - Workspace\58 - WebSockets>node server.js
Server web avviato
Client connesso
Connesso al server WebSocket
Messaggio ricevuto: <Buffer 43 69 61 6f 20 73 65 72 76 65 72 20 57 65 62 53 6f 63 6b 65 74 21>
Messaggio ricevuto dal server: Hai detto: Ciao server WebSocket!

 */