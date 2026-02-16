
// script.js

// Funzione per ottenere i dati dal server
async function aggiornaDati() {
    try {
      const response = await fetch("/calcola"); // Chiede i dati al server
      const data = await response.json(); // Converte la risposta in JSON
  
      // Aggiorna gli elementi HTML con i risultati
      document.getElementById("somma").textContent = data.somma;
      document.getElementById("differenza").textContent = data.differenza;
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
    }
  }
  
  // Chiama la funzione quando la pagina è caricata
  window.onload = aggiornaDati;
  