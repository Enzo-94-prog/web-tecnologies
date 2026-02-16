

// Importa la strategia Local da Passport per la gestione dell'autenticazione tramite username e password
const LocalStrategy = require('passport-local').Strategy;

// Importa il modello User per interagire con la base di dati degli utenti
const User = require('./models/user');

// Usa la strategia Local per gestire l'autenticazione
passport.use(new LocalStrategy(

  // Funzione di verifica dell'utente con username e password
  function(username, password, done) {

    // Cerca l'utente nel database in base al nome utente
    User.findOne({ username: username }, function (err, user) {

      // Se c'è un errore nella ricerca, restituisce l'errore
        if (err) { 
        return done(err); 
    }

      // Se l'utente non esiste, restituisce 'false'
        if (!user) { 
        return done(null, false); 
    }

      // Se la password non è corretta, restituisce 'false'
      if (!user.verifyPassword(password)) { return done(null, false); }

      // Se tutto è valido, restituisce l'utente
      return done(null, user);
    });
  }
));



// Serializza l'utente salvando solo l'ID nella sessione
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  
// Deserializza l'utente recuperandolo dal database tramite l'ID salvato nella sessione
passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });


/* Spiegazione:
- passport.serializeUser(...): Questa funzione viene chiamata quando un utente viene 
                               autenticato con successo. Salva l'id dell'utente nella 
                               sessione per identificare l'utente nelle richieste successive.

- passport.deserializeUser(...): Quando una richiesta proviene da un utente autenticato, 
                                 questa funzione viene chiamata per recuperare le 
                                 informazioni complete dell'utente dal database. Viene usato 
                                 l'ID salvato nella sessione per trovare l'utente 
                                 corrispondente. Una volta trovato, l'utente viene restituito
                                 e reso disponibile nelle richieste successive.   */
    
       
  });

