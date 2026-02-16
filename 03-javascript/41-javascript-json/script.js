


    //this fa riferimento all'oggetto corrente, ovvero l'oggetto su cui è stata chiamata la funzione o il metodo
    const persona = {
        nome: "Mario",
        cognome: "Rossi",
        eta: 30
        
    };
    
    const personaJson = JSON.stringify(persona); /* converte un oggetto JavaScript (persona) 
                                                    in una stringa JSON */
    
    /* Si può salvare il risultato di JSON.stringify() in un file JSON utilizzando Node.js */
    
    console.log("Stringa JSON:") + console.log(personaJson); 
    /* Output: Stringa JSON:
               {"nome": "Mario", "cognome": "Rossi", "eta": 30} */

    console.log("\n");

    // personaJson2 e una stringa in formato JSON
    const personaJson2 = '{"nome": "Mario", "cognome": "Rossi", "eta": 30}';

    /* converte una stringa JSON in un oggetto JavaScript */
    const persona2 = JSON.parse(personaJson2);

    console.log("Oggetto Javascript:") + console.log(persona2);
    /* Output: Oggetto Javascript:
               {nome: 'Mario', cognome: 'Rossi', eta: 30} */
     

    