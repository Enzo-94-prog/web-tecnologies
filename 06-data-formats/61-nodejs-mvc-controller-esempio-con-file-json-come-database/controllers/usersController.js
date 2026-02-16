

// Importa il modulo database che gestisce l'accesso ai dati
const database = require('../data/database');

// Definisce il controller per la gestione degli utenti
const usersController = {
  
  // Funzione per registrare un nuovo utente
  registerUser(req, res) {
    // Estrae username e password dalla richiesta (req.body)
    const { username, password } = req.body; 

    // Verifica che username e password siano presenti
    if (!username || !password) {
      // Se mancano username o password, restituisce un errore  
      res.status(400).send('Invalid username or password');
      return;
    }

    // Crea un oggetto utente con i dati ricevuti
    const user = { username, password };

    // Simulazione del salvataggio nel database
    console.log("database.saveUser(user)");

    // Restituisce una risposta di conferma al client
    res.send(`User ${username} registered successfully`);
  },

  // Funzione per filtrare gli utenti in base al termine di ricerca
  filterUsers(users, search) {
    // Se non è presente un termine di ricerca, restituisce tutti gli utenti
    if (!search) {
      return users;
    }

    // Filtra gli utenti che contengono il termine di ricerca nel nome (case-insensitive)
    return users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  },

  // Funzione per elencare gli utenti
  listUsers(req, res) {
    // Dati degli utenti (potrebbero provenire da un database)
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
    ];

    // Filtra gli utenti in base al termine di ricerca passato nella query string
    const filteredUsers = this.filterUsers(users, req.query.search);

    // Renderizza la vista 'users' passando l'elenco degli utenti filtrati
    res.render('users', { users: filteredUsers });
  },

  
  
  // Funzione asincrona per ottenere gli utenti dal database
  async usersFromDB(req, res) {
    try {
      // Recupera gli utenti dal database utilizzando una funzione asincrona
      const users = await database.getUsers();
      
      // Stampa l'elenco degli utenti sulla console per il debugging
      console.log(users);
      
      // Renderizza la vista 'users' passando l'elenco degli utenti
      res.render('users', { users: users });

    } catch (error) {
      // Gestione degli errori nel recupero degli utenti dal database
      console.error("Errore nel recupero utenti:", error);
      res.status(500).send("Errore nel recupero degli utenti");
    }
  }
};

// Esporta il controller per poterlo utilizzare in altre parti dell'app
module.exports = usersController;
