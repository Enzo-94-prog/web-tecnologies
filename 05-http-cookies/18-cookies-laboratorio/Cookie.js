

/*  La funzione setSessionCookie(name,value)  crea un cookie di sessione nel browser. Per
    capire il funzionamento nel dettaglio vedi la funzione setPersistentCookie*/
function setSessionCookie(name,value) {

    var cookie = encodeURIComponent(name) + "=" + 
        encodeURIComponent(value) + "; path=/";    /* path=/ indica la root */
    
    document.cookie = cookie;
    console.log("Successfully created session cookie:\n" + cookie)

}


/*  La funzione setPersistentCookie(name, value, days) crea un cookie persistente che 
    rimane memorizzato nel browser anche dopo la chiusura, con una durata specificata 
    in giorni. */
function setPersistentCookie(name, value, days) {

    let date = new Date(Date.now() + days*86400e3); /* Una variabile dichiarata con "let" o 
                                                       "const" esiste solo all'interno del 
                                                       blocco {} in cui è stata dichiarata.
                                                       "var" NON ha scope di blocco (ma di
                                                       funzione), è visibile anche fuori dal 
                                                       blocco, il che può causare bug.
                                                    */
    
                                                    /* Date.now() restituisce il timestamp 
                                                       corrente (un mumero) in millisecondi 
                                                       dal 1º gennaio 1970 00:00:00 UTC, 
                                                       noto anche come Epoch Unix/ 
                                                    */

                                                    /* days*86400e3 converte i giorni
                                                       in millisecondi*/

    date = date.toUTCString(); /* converte la data in un formato compatibile con i cookie*/


    /* L'istruzione successiva crea una stringa di cookie che verrà poi assegnata a 
       document.cookie per memorizzare il cookie nel browser .

       1. encodeURIComponent(name) converte il nome del cookie in un formato URL-safe.
          Se name = "user name", la funzione lo trasforma in "user%20name", sostituendo 
          spazi e caratteri speciali con codici compatibili con gli URL.
          
       2. encodeURIComponent(value) converte il valore del cookie in un formato URL-safe.
          Se value = "Luca&Co", diventa "Luca%26Co" (il carattere & viene codificato come %26)

       3. + "=" + concatena il nome e il valore del cookie con il simbolo = per formare 
          la coppia name=value.
          
       4. ["; expires =" + date] specifica la scadenza del cookie. 
          Se expires non è impostato, il cookie sarà di sessione e verrà eliminato alla 
          chiusura del browser.

       5. ["; path=/"] specifica il percorso del cookie, cioè per quali pagine del sito 
          il cookie è valido.🔹 Se path=/, il cookie sarà accessibile da tutte le pagine 
          del sito (dominio).🔹 Se path=/subdir, il cookie sarà valido solo per /subdir e 
          le sue sottocartelle.
          */
        
    var cookie = encodeURIComponent(name)  + "=" +
        encodeURIComponent(value) + "; expires =" + date +"; path=/";
        
    
    //Assegna il cookie a document.cookie per salvarlo nel browser.
    document.cookie = cookie;

    //Mostra il cookie nella console per confermare la creazione.
    console.log("Successfully created persistent cookie:\n" + cookie)
}



/* La funzione permette di di impostare un cookie personalizzato con diverse opzioni,
   senza il bisogno di avere due funzioni separate (setSessionCookie e setPersistentCookie)*/
function setCustomCookie(name, value, option = {}) {

    let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);


    /* 1. [option = {}] → Un oggetto opzionale con impostazioni aggiuntive (es. scadenza, 
          percorso, sicurezza). Il valore predefinito di option è un oggetto vuoto. Se il 
          chiamante non passa alcuna opzione, la funzione userà un oggetto vuoto per evitare 
          errori. Questa tecnica è utile per rendere il codice più flessibile e leggibile. */
    
    if(option.expires instanceof Date) {

        /* Questo codice è un tentativo di verificare e manipolare la proprietà expires 
           (qualora fosse stata indicata) dell'oggetto option passato alla funzione. 
           
           [instanceof Date]: Questa parte del codice verifica se la proprietà expires 
           di option è un oggetto di tipo Date. Se option.expires è un'istanza di Date, 
           il codice all'interno del blocco if verrà eseguito. Date è un oggetto di 
           JavaScript che rappresenta una data e un'ora. */



        /* Qui si tenta di formattare la data in formato UTC utilizzando il metodo 
           toUTCString() per ottenere una rappresentazione leggibile della data
           
           [option.expires.toUTCString()]: Questo invoca il metodo toUTCString() sull'oggetto 
           Date (presumibilmente option.expires) per ottenere la data in formato UTC.
           Se option.expires è una data, questa verrà convertita in una stringa del tipo
           Wed, 21 Oct 2025 11:30:00 GMT */

        option.expires = option.expires.toUTCString();
    }

    for (let optionKey in option) {
        /*La sintassi let optionKey in options è una parte di un ciclo for...in in 
          JavaScript, utilizzata per iterare attraverso le proprietà di un oggetto,
          in questo caso dell'oggetto option.
          
        🔹Spiegazione dettagliata:

          let optionKey: La variabile optionKey conterrà i nomi delle proprietà di options 
                         durante ogni iterazione del ciclo.
                         Ad esempio, se options ha le proprietà expires, path e secure, 
                         ad ogni passaggio di ciclo, optionKey prenderà uno di questi valori.

          in options: Questo specifica che vogliamo iterare attraverso le proprietà 
                      dell'oggetto options.

        🔹Riassunto:
           for...in è un ciclo che permette di iterare attraverso tutte le proprietà di un 
           oggetto. La variabile optionKey conterrà i nomi delle proprietà (non i valori) in 
           ogni iterazione.
           Usando options[optionKey], puoi accedere al valore associato a quella proprietà 
           dell'oggetto. Questa sintassi è molto utile quando non conosci le proprietà di 
           un oggetto in anticipo e vuoi iterare dinamicamente attraverso tutte le sue chiavi.            
          */


        /*
          cookie += ...: Qui cookie è una variabile che contiene una stringa 
                         (una stringa di cookie). L'operatore += viene 
                         utilizzato per aggiungere qualcosa alla stringa esistente di cookie. 
          
          "; " + optionKey: Viene concatenata una stringa che inizia con un punto e virgola 
                            seguito da uno spazio (per separare i diversi attributi del 
                            cookie) e poi la variabile optionKey, che rappresenta una delle 
                            proprietà opzionali del cookie (ad esempio, expires, path, 
                            secure, ecc.). Serve a separare ogni coppia di nome/valore con 
                            un punto e virgola e uno spazio, creando così una lista di 
                            attributi separati. */
        cookie += "; " + optionKey;


        /*
           istruzione JavaScript che accede dinamicamente a una proprietà dell'oggetto 
           option usando la variabile optionKey come chiave (funge da indice). il valore
           viene memorizzato nella variabile optionValue.
         */
        let optionValue = option[optionKey];


        if(optionValue !== true) {
            /* !==: è l'operatore di differenza stretta in JavaScript, che confronta sia il 
                    tipo che il valore delle variabili. Verifica che due valori non siano 
                    uguali in valore e in tipo.
                    La condizione verifica se optionValue non è true. Se optionValue è 
                    qualsiasi valore diverso da true, il blocco di codice all'interno 
                    dell'if verrà eseguito*/


            cookie += "=" + optionValue;
        }
    }

    document.cookie = cookie;
    console.log("Successfully created custom cookie:\n" + cookie); 
}



/* La funzione getCookie(cname) è un metodo JavaScript per recuperare il 
   valore di un cookie dato il suo nome (cname). */
function getCookie(cname) {

    /* Si crea una stringa contenente il nome del cookie seguito dal simbolo =. Ad esempio, 
       se il nome del cookie è "user", name diventa "user=". */
    let name = cname + "=";

    /* document.cookie contiene una stringa con tutti i cookie del documento, separati 
       da ;. La funzione decodeURIComponent è usata per decodificare eventuali caratteri 
       speciali nei cookie (ad esempio, spazi o caratteri UTF-8). */
    let decodedCookie = decodeURIComponent(document.cookie);


    /* La stringa di tutti i cookie viene separata in un array ca utilizzando il punto e 
       virgola (;) come delimitatore. ca sta per "cookie-array*/
    let ca = decodedCookie.split(';');

    
    /* Ciclo for e rimozione degli spazi:
       Si itera sull'array ca per esaminare ogni cookie. */
    for(let i = 0; i < ca.length; i++) {

        let c = ca[i];


          /*  Se il cookie inizia con uno spazio, viene rimosso grazie al 
              ciclo while(c.charAt(0) == ' '). */
        while(c.charAt(0) == ' ') {

            c = c.substring(1);
        }

        
        /*if (c.indexOf(name) == 0) controlla se il cookie inizia con il nome 
          specificato (name). Se sì, significa che abbiamo trovato il cookie giusto */
        if(c.indexOf(name) == 0) {

            /*c.substring(name.length, c.length): Se il cookie corrisponde al nome,
              questa parte estrae il valore del cookie, rimuovendo il nome e il segno = */
            return c.substring(name.length, c.length);
        }
    }
    
    return ""; // Se non viene trovato alcun cookie, restituisce una stringa vuota
}




function deleteCookie(name) {
    
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    console.log("Cookie '" + name + "' eliminato");

    /* 

    1️⃣ name + "=" --> Imposta il valore del cookie come vuoto (""). Se il cookie esiste, 
                       il browser lo sovrascriverà con questa nuova versione.
    
    2️⃣ Path=/   --> Definisce il percorso del cookie. Con Path=/, il cookie viene eliminato 
                     per tutte le pagine del sito. Se il cookie è stato impostato con un 
                     percorso più specifico (es. /dashboard), dovrai specificarlo anche qui.

    3️⃣ Expires=Thu, 01 Jan 1970 00:00:00 GMT

    Imposta la data di scadenza del cookie a un momento nel passato.
    Il 1º gennaio 1970 è il riferimento per il tempo Unix (timestamp 0), quindi forzare 
    questa data fa sì che il browser cancelli immediatamente il cookie.

       */
}
