

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
    const user = {
      username,
      password
    };

    // Logga un messaggio di esempio (qui si simula il salvataggio nel database)
    /* Al momento, i dati degli utenti sono hardcoded in un array. In un'applicazione reale, 
       questi dati dovrebbero provenire da un database. Per fare ciò, dovresti usare una 
       libreria come Mongoose (se usi MongoDB) o Sequelize (per un database SQL) per 
       interagire con il database.
     */
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
    return users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
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
  }
};

// Esporta il controller per poterlo utilizzare in altre parti dell'app
module.exports = usersController;

/* Funzionamento:
Il controller gestisce le richieste di registrazione (registerUser), l'elenco degli utenti 
(listUsers) e il filtraggio degli utenti (filterUsers).

La funzione registerUser simula il processo di registrazione di un utente, mentre listUsers 
mostra l'elenco degli utenti, eventualmente filtrati in base alla ricerca.

Le funzioni sono modulari e possono essere facilmente richiamate in altre parti 
dell'applicazione, come nel router. 

*/