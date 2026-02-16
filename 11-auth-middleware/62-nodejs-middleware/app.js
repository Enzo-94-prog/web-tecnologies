

// Importa il modulo express per creare il server
const express = require('express');

// Importa il modulo passport per l'autenticazione
const passport = require('passport');

// Crea una nuova applicazione Express
const app = express();



// Inizializza passport per gestire l'autenticazione
app.use(passport.initialize());


// Importa la strategia di autenticazione con Facebook
const FacebookStrategy = require('passport-facebook').Strategy;

// Configura Passport per utilizzare la strategia Facebook
passport.use(new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID, // ID dell'app Facebook (preso dalle variabili d'ambiente)
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET, // Chiave segreta dell'app Facebook
    callbackURL: "/auth/facebook/callback" // URL a cui Facebook reindirizzerà dopo il login
  },
  function(accessToken, refreshToken, profile, done) {
    // Questa funzione viene chiamata dopo l'autenticazione con Facebook
    // Verifica l'identità dell'utente e restituisce il profilo
    return done(null, profile);
  }
));


// Route per avviare l'autenticazione con Facebook
app.get('/auth/facebook', passport.authenticate('facebook'));

// Route per gestire il callback dopo l'autenticazione con Facebook
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }), // Se il login fallisce, reindirizza a /login
  function(req, res) {
    // Se l'autenticazione ha successo, reindirizza alla homepage
    res.redirect('/');
  }
);




// Importa la strategia di autenticazione con Google
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configura Passport per utilizzare la strategia Google
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID, // ID dell'app Google (preso dalle variabili d'ambiente)
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Chiave segreta dell'app Google
    callbackURL: "/auth/google/callback" // URL a cui Google reindirizzerà dopo il login
  },
  function(accessToken, refreshToken, profile, done) {
    // Questa funzione viene chiamata dopo l'autenticazione con Google
    // Verifica l'identità dell'utente e restituisce il profilo
    return done(null, profile);
  }
));


// Route per avviare l'autenticazione con Google
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }) // Richiede solo il profilo dell'utente
);

// Route per gestire il callback dopo l'autenticazione con Google
app.get('/auth/google/callback',
  // Gestisce il callback dell'autenticazione, se fallisce redirige a '/login'
  passport.authenticate('google', { failureRedirect: '/login' }), 
  function(req, res) {
    // Se l'autenticazione ha successo, reindirizza alla homepage
    res.redirect('/'); // Reindirizza alla pagina principale dell'app
  }
);





