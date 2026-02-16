// file usersController.js

// Funzione per elencare gli utenti, con filtro opzionale in base alla query 'search'
function listUsers(req, res) {
    // Dati di esempio (potrebbero provenire da un database)
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
    ];
  
    // Filtra gli utenti se la query 'search' è presente, altrimenti restituisce tutti gli utenti
    const filteredUsers = filterUsers(users, req.query.search);
  
    // Renderizza la vista 'users', passando l'elenco degli utenti filtrati
    res.render('users', { users: filteredUsers });
  }
  
  // Funzione per filtrare gli utenti in base alla query 'search' (case-insensitive)
  function filterUsers(users, search) {
    if (!search) {
      return users; // Se non c'è un termine di ricerca, restituisce tutti gli utenti
    }
  
    // Filtra l'elenco utenti per nome, ignorando il case
    return users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  
  // Esportazione della funzione 'listUsers' in modo che possa essere utilizzata altrove
  module.exports = {
    listUsers,
  };
  