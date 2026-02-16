
var myData = JSON.parse(data);   //myData è un array di oggetti javascript
console.log(myData)
document.getElementById("from_js").innerHTML=myData[0].nome;

/*
🚀 Cosa fa questo codice?

- Tramite la funzione "parse" converte la stringa JSON in un array di oggetti.
- Mostra l'array in console.
- Inserisce Mario nell'elemento HTML con id="from_js".

 */

fetch('./data.json')  //fetch API; viene fatta una chiamata ad una URL interna (./)
    .then(response => response.json()) 
    .then(json => {
        console.log(json)
        document.getElementById("from_json").innerHTML = json[0].nome;
    })

    .catch(error => console.error("Errore nel recupero del JSON:", error)); // Gestisce errori

/*

📌 Cosa fa questo codice?
- Recupera il file data.json con fetch().
- Converte la risposta in JSON con response.json().
- Mostra il JSON in console e aggiorna un elemento HTML con id="from_json" con il valore 
  json[0].nome
- Aggiunge un catch per gestire eventuali errori di rete o JSON non valido.

*/