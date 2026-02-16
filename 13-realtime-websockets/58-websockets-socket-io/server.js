
// Importa il framework Express
const express = require('express');
const app = express();
const path = require('path'); // Importa il modulo 'path' per la gestione dei percorsi
const cors = require('cors'); // Importa il pacchetto CORS

// Crea un server HTTP utilizzando il modulo 'http'
const http = require('http');
const httpServer = http.createServer(app);

// Importa e inizializza Socket.IO per la comunicazione WebSocket
const socketIo = require('socket.io');
const io = socketIo(httpServer, {
    cors: {
        origin: "*", // Consente richieste da qualsiasi dominio (modifica se necessario)
        methods: ["GET", "POST"] // I metodi HTTP consentiti
    }
});

// Definisce la porta su cui il server sarà in ascolto (usa la variabile d'ambiente o 3001)
const PORT = process.env.PORT || 3001;

// Abilita CORS per le richieste HTTP
app.use(cors());

// Serve i file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Gestisce le connessioni WebSocket
io.on('connection', (socket) => {
    console.log('🔗 Nuova connessione stabilita');

    // Ascolta il messaggio ricevuto dal client
    socket.on('message', (message) => {
        console.log('📩 Messaggio ricevuto:', message);
        
        // Invia il messaggio di risposta a tutti i client connessi
        io.emit('message', `Hai detto: ${message}`);
    });

    // Evento eseguito quando il client si disconnette
    socket.on('disconnect', () => {
        console.log('❌ Client disconnesso');
    });
});

// Avvia il server HTTP sulla porta specificata
httpServer.listen(PORT, () => {
    console.log(`🚀 Server in ascolto sulla porta ${PORT}`);
});
