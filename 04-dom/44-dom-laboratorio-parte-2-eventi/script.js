

//aggiungere elementi a una lista (ul) quando si clicca su un pulsante
document.getElementById("aggiungiBtn").addEventListener("click", function() {
    var nuovoElemento = document.createElement("li"); // Si crea un nuovo elemento <li>
    nuovoElemento.textContent = "Nuovo elemento"; // Si imposta il suo contenuto
    document.getElementById("lista").appendChild(nuovoElemento); //	Si aggiunge alla fine della lista <ul> con appendChild(nuovoElemento).
});

//



    