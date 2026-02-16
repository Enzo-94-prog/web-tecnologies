
// Funzione asincrona per ottenere gli utenti dal server
async function getUsers() {
    // Utilizza 'fetch' per fare una richiesta GET all'endpoint '/api/users'
    const response = await fetch('http://localhost:3001/api/users');
    
    // Converte la risposta in formato JSON
    const data = await response.json();
    
    // Restituisce i dati degli utenti ricevuti dal server
    return data;
  }
  
  // Funzione asincrona per salvare un utente sul server
  async function saveUser(user) {
    // Al momento questa funzione stampa solo "SAVEUSER" nella console
    // In futuro, implementerai la logica per inviare i dati dell'utente tramite POST o PUT
    console.log("SAVEUSER");
  }
  
  // Esporta le funzioni 'getUsers' e 'saveUser' in modo che possano essere utilizzate in altre parti dell'app
  module.exports = {
    getUsers,
    saveUser,
  };
  