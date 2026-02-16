

// Importa il modulo express per creare il server
const express = require('express');
const app = express();

// Importa il controller degli utenti
const usersController = require('./controllers/usersController');


// ⚠️ Definisce la route '/users' e collega la funzione 'listUsers' dal controller ⚠️
/* In Express, la route e il controller sono correlati, poiché la route viene definita 
   per associare una richiesta HTTP a una specifica funzione di controller (in questo
   caso la funzione listUsers) */ 
app.get('/users', usersController.listUsers);

// Imposta la cartella in cui Express cercherà i file di vista (views)
app.set('views', './views');



// Serve file statici dalla cartella 'public'
app.use(express.static('public'));

// Per elaborare JSON
app.use(express.json());  

// Per elaborare i dati dei form HTML
app.use(express.urlencoded({ extended: true })); 



// Gestisce la richiesta POST alla rotta '/register' utilizzando la funzione 'registerUser' dal controller 'usersController'
app.post('/register', usersController.registerUser);

// Imposta 'ejs' come motore di rendering per le viste
app.set('view engine', 'ejs');

// Avvia il server sulla porta 3001 e stampa un messaggio di avvio
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
