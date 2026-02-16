

// itemList contiene l'oggetto HTML che verrà aggiunta alla pagina HTML
// #itemList è il selettore di querySelector
const itemList = document.querySelector('#itemList'); /* seleziona l'elemento 
                                                         con id="itemList", salvandolo 
                                                         nella variabile itemList */
                                    
                                                         
itemList.addEventListener("click", function (event) {
        if(event.target.tagName === "LI") { /* event.target è l'elemento effettivo su cui è 
                                               avvenuto il click. */
                                            /* event.target.tagName restituisce il nome del 
                                               tag in maiuscolo */

            event.target.classList.toggle('selected'); 
        /*  classList aggiunge o rimuove la classe "selected" dall'elemento cliccato.
            Se il <li> non ha la classe "selected", la aggiunge.
            Se il <li> ha già la classe "selected", la rimuove. */

            /* classList è una proprietà che permette di accedere, aggiungere o rimuovere 
               le classi CSS di un elemento HTML. 
               Nel progetto la classa CSS è stata definita nell'head utilizzando i 
               tag <style> */

            /* Funzionamento pratico:
                Quando clicchi su un <li> all'interno della lista #itemList:

                Se il <li> non ha la classe "selected", il codice la aggiunge.
                Se il <li> ha già la classe "selected", il codice la rimuove.
                In questo modo si ha un effetto visivo sull'elemento selezionato.
                Se clicchi su uno spazio vuoto o su un altro elemento diverso da <li>, 
                non succede nulla. */
        }
    }
);

const form = document.querySelector('#addItemForm'); //si può usare anche getElementById
form.addEventListener('submit', function(event) {
    
    event.preventDefault(); /* impedisce il comportamento predefinito di un pulsante submit, 
                               ovvero quello di inviare il modulo e ricaricare la pagina */
    
    const input = document.querySelector("#inputTesto");
    const value = input.value.trim(); /* .trim(): rimuove gli spazi bianchi (spazi, 
                                                  tabulazioni e linee vuote) all'inizio e 
                                                  alla fine della stringa */
    if(value !== "") {

        addItemToList(value);
        input.value = "";
        input.focus(); /* serve per spostare il cursore (di solito una linea verticale 
                          lampeggiante)  all'interno di un elemento <input>, senza doverci 
                          cliccare sopra manualmente  */
    }
});


function addItemToList(value) {

    const newItem = document.createElement('li'); // crea nuovo elemento della lista
    newItem.textContent = value;
    itemList.appendChild(newItem);
}


const removeSelectedButton = document.querySelector("#removeSelectedButton"); /*si seleziona
                                                                                il pulsante */

removeSelectedButton.addEventListener("click", function () { /* quando avviene il clicks sul
                                                                pulsante */

    /* la funzione di callback prende tutto quello che è stato selezionato da 
       querySelectorAll e rimuove tutto cio che era stato selezionato tramite
       la remove() all'interno del forEach */
    const selectedItems = document.querySelectorAll(".selected"); 
    selectedItems.forEach(function(item) { 
        item.remove();
    });  
})
