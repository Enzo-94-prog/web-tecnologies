
// Seleziona l'elemento con ID "mio_div" e applica l'effetto fadeIn (dissolvenza)
$("#mio_div").fadeIn(1000, function() {
    // Quando l'animazione è completata, mostra un alert
    alert("L'elemento è stato mostrato completamente!");
});

/* Spiegazione:
 - $("#mio_div") → Seleziona l'elemento con ID mio_div.
 - .fadeIn(1000, function() {...}) → Applica un'animazione di dissolvenza in entrata della 
                                    durata di 1000 ms (1 secondo).
-  La funzione di callback viene eseguita dopo che l'animazione è terminata, mostrando un 
   messaggio di avviso.

   */

// ------------- Callback -----------------------------------------------------

// Seleziona l'elemento con ID "mio_div" e applica un'animazione
$("#mio_div").animate(
    { left: '250px' }, // Sposta il div di 250px verso destra
    1000, // Durata dell'animazione (1 secondo)
    function() {
        // Callback: dopo che il primo movimento è terminato
        $("#mio_div").animate(
            { top: '250px' }, // Sposta il div di 250px verso il basso
            1000 // Durata della seconda animazione (1 secondo)
        );
    }
);


// Quando l'immagine con ID "mio_img" è completamente caricata
$("#mio_img").on("load", function() {
    // Mostra un alert per confermare il caricamento
    alert("L'immagine è stata caricata correttamente!");
});


// Quando si verifica un errore nel caricamento dell'immagine con ID "mio_img"
$("#mio_img").on("error", function() {
    // Mostra un alert per avvisare che c'è stato un errore nel caricamento
    alert("Si è verificato un errore nel caricamento dell'immagine!");
});


//------------ Chaining (o concatenazione) -------------------------------

$("#mio_div")
.hide()
.html("Nuovo contenuto")
.fadeIn(1000);  

//-----------------------------------------------------------------------

// Impostiamo il testo di un elemento <p>
$("p").text("Questo è un nuovo testo");

// Restituiamo il testo di un elemento <p> e lo memorizziamo nella variabile "testo"
var testo = $("p").text();


// Impostiamo il contenuto HTML di un elemento <div>
$("div").html("<p>Questo è un nuovo paragrafo</p>");

// Restituiamo il contenuto HTML di un elemento <div> e lo memorizziamo nella variabile "html"
var html = $("div").html();


// Impostiamo il valore di un campo di input di tipo testo
$("input[type='text']").val("Nuovo valore");

// Restituiamo il valore di un campo di input di tipo testo e lo memorizziamo nella variabile "valore"
var valore = $("input[type='text']").val();


//-----------------------------------------------------------------------

