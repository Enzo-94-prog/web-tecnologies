console.log('this is a simple test') /* dal browser, ispeziona/console e vedo il messaggio
                                        racchiuso tra le parentesi.
                                        javascript può essere utilizzato per loggare o per
                                        operare sulla pagina */


/*Uno dei tanti metodi HTML di JavaScript è getElementById().
  Funzionamento:

  Seleziona l'elemento HTML con id="myId" utilizzando document.getElementById("myId").
  Sostituisce il contenuto HTML interno dell'elemento (inner) con "Hello World".
  
  <br></br> permette di inserire dei ritorni a capo */
document.getElementById("myId").innerHTML="<br></br>hello world";

function gimmesomething() {

    alert("HELLO")
    document.getElementById("myId").innerHTML="<br></br>IL MIO NUOVO CONTENUTO";
}

console.log("chiamata alla funzione gimmesomething()")
