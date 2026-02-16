
// Importa le dipendenze necessarie
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Crea un'istanza dell'applicazione Express
const app = express();

// Configura il middleware per il parsing del corpo delle richieste HTTP
app.use(bodyParser.urlencoded({ extended: true }));  // Per il parsing dei dati URL encoded
app.use(bodyParser.json());  // Per il parsing dei dati JSON

// Configura la cartella "public" per i file statici
app.use(express.static(path.join(__dirname, 'public')));

// Definisci le rotte dell'applicazione
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

// Associa le rotte all'app
app.use('/', indexRouter);  // Rotta principale
app.use('/users', userRouter);  // Rotta per gli utenti
app.use('/posts', postRouter);  // Rotta per i post

// Gestisci gli errori
app.use((err, req, res, next) => {
    console.error(err.stack);  // Stampa l'errore nel log della console
    res.status(500).send('Internal server error');  // Invia una risposta di errore generico al client
});

// Avvia il server sulla porta specificata
const PORT = process.env.PORT || 3001;  // Usa la variabile d'ambiente PORT o 3000 come fallback
app.listen(PORT, () => { 
    console.log(`Server avviato sulla porta ${PORT}`);  // Conferma che il server è in esecuzione
});

/*
--- Spiegazione del codice ---

Importazione delle dipendenze: Il codice importa le librerie necessarie per configurare il 
server Express (express), gestire il parsing dei dati (body-parser) e gestire i percorsi dei 
file statici (path).

Middleware: body-parser è usato per elaborare i dati inviati con le richieste HTTP (URL 
            encoded o JSON).

File statici: Viene configurato Express per servire i file dalla cartella public.

Rotte: Definisce le rotte per gestire diverse parti dell'app (ad esempio /, /users, /posts).

Gestione errori: Aggiunge una gestione degli errori per intercettare e loggare eventuali 
                 errori durante l'elaborazione delle richieste.

Avvio server: Il server viene avviato sulla porta 3000 o una porta definita nell'ambiente di
              esecuzione.

*/


                                /* Routes (rotte) */

// Definisce la rotta per la home page ("/")
app.get('/', (req, res) => {
    // Risponde con un messaggio 'Hello World!' quando la rotta viene chiamata
    res.send('Hello World!');
});

/* --- Spiegazione ---

app.get('/'): Questo definisce una rotta HTTP GET per il percorso radice (/), che è la home 
              page del sito.

Callback (req, res): Quando il client (ad esempio un browser) effettua una richiesta GET per 
                     il percorso /, viene eseguita questa funzione.

req (request): Rappresenta l'oggetto della richiesta, che contiene informazioni sulla 
               richiesta HTTP (ad esempio, i parametri URL, i dati del corpo della richiesta,
               ecc.).

res (response): Rappresenta l'oggetto della risposta, che ti consente di inviare una risposta
                al client.

res.send('Hello World!'): La funzione send() invia una risposta al client. In questo caso, 
                          invia il testo 'Hello World!' come risposta al client.

*/

/* ------------------------------------------------------------------------------ */



/* La rotta appena analizzata può anche essere definita in file separato per una migliore
   organizzazione del codice: si possono definire i router che gestiscono le rotte per un 
   gruppo di funzionalità correlate, e poi collegare questi router all'applicazione 
   principale utilizzando il metodo app.use(). */


// Importa il router per la rotta principale (index)
const indexRouter = require('./routes/index');

// Utilizza il router per la rotta principale ("/")
// Quando viene effettuata una richiesta alla rotta "/", il router 'indexRouter' gestirà la richiesta
app.use('/', indexRouter);


/* Sarà poi necessario creare un file index.js all’interno della cartella routes/ ed inserire (ad es.) il
seguente codice:


// Importa il framework Express e crea un router
const express = require('express');
const router = express.Router();

// Gestisce le richieste GET per la rotta principale ("/")
router.get('/', (req, res) => {
    // Risponde con 'Hello World' quando si effettua una richiesta GET alla rotta "/"
    res.send('Hello World');
});

// Gestisce le richieste GET con un parametro dinamico ("/:id")
router.get('/:id', (req, res) => {
    // Ottiene il parametro 'id' dalla richiesta
    const myId = req.params.id;

    // Risponde con un messaggio che include l'ID passato nell'URL
    res.send(`Hello World ${myId}`);
});

// Gestisce le richieste POST per la rotta principale ("/")
router.post('/', (req, res) => {
    // Ottiene il corpo della richiesta
    const _body = req.body;

    // Logga il corpo della richiesta nella console
    console.log(_body);

    // Risponde con un messaggio che indica che è stato ricevuto un POST
    res.send('POST');
});

// Esporta il router in modo che possa essere utilizzato in altri file
module.exports = router;


*/


