

// Importa il modulo express per creare il server
const express = require('express');

// Importa il modulo passport per l'autenticazione
const passport = require('passport');

// Crea una nuova applicazione Express
const app = express();



// Inizializza passport per gestire l'autenticazione
app.use(passport.initialize());


/* Gestisce la richiesta POST per per proteggere la rotta /login in modo automatico senza 
   dover gestire la logica di verifica delle credenziali */
app.post('/login',
  // Usa la strategia 'local' di Passport per autenticare l'utente
  passport.authenticate('local', {
    successRedirect: '/',   // Se l'autenticazione ha successo, reindirizza alla homepage
    failureRedirect: '/login' // Se fallisce, reindirizza alla pagina di login
  })
);


// Gestisce la richiesta GET per la pagina del profilo (rotta /profile)
app.get('/profile',
  // Usa la strategia 'local' di Passport per autenticare l'utente prima di accedere al profilo
  passport.authenticate('local'),
  function(req, res) {
    // Renderizza la pagina del profilo passando i dati dell'utente autenticato
    res.render('profile', { user: req.user });
  }
);



// Avvia il server sulla porta 3001 e stampa un messaggio di avvio
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
