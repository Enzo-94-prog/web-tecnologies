
<!----------------------------------- Vue ------------------------------------->

<template>
  <!-- Il template contiene l'HTML che definisce la struttura dell'interfaccia utente -->
  <div>
    <!-- Titolo della pagina -->
    <h1>Lista post</h1>
    
    <!-- Lista dei post -->
    <ul>
      <!-- Cicla su ogni post nell'array 'posts' e mostra il titolo -->
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>



<!----------------------------------- Axios ------------------------------------->

<script>
  // Importa axios per effettuare richieste HTTP
  import axios from 'axios';

  export default {
    // La sezione 'data' contiene i dati da usare nel componente
    data() {
      return {
        posts: []  // Array per memorizzare i post recuperati
      };
    },
    
    // Il metodo 'mounted' viene chiamato quando il componente è montato nel DOM
    mounted() {
      // Effettua una richiesta GET per ottenere i post da un'API
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          // Assegna i dati ricevuti alla variabile 'posts'
          this.posts = response.data;
        })
        .catch(error => {
          // In caso di errore, logga l'errore
          console.log(error);
        });
    }
  };
</script>


<!-- 
📌 Spiegazione del codice

<template>:
La parte di codice HTML che definisce la struttura dell'interfaccia utente del componente.
- <h1>Lista post</h1>: Un titolo per la pagina.
- <ul>: Un elemento di lista non ordinata.
        v-for="post in posts" :key="post.id": La direttiva v-for di Vue.js viene usata per 
                                              iterare sull'array posts. Per ogni iterazione, 
                                              il titolo del post (post.title) viene 
                                              visualizzato all'interno di un <li>. 
                                              La direttiva :key assicura che ogni elemento 
                                              della lista abbia una chiave univoca, 
                                              migliorando le performance e la gestione del 
                                              DOM.
                                              

        {{ post.title }}: La sintassi di interpolazione di Vue.js per mostrare il titolo di 
                          ogni post.



<script>:
- import axios from 'axios';: Importa la libreria axios, che viene utilizzata per effettuare 
                              richieste HTTP.

- data(): Un metodo che restituisce un oggetto con i dati del componente. In questo caso, 
          posts è un array vuoto che verrà popolato con i dati recuperati dall'API.

mounted(): Un hook di ciclo di vita di Vue.js. Viene eseguito quando il componente è stato 
           montato nel DOM. 
           All'interno di questo metodo:

           - axios.get('https://jsonplaceholder.typicode.com/posts'): 
               Effettua una richiesta GET all'API https://jsonplaceholder.typicode.com/posts 
               per ottenere i dati dei post.

           then(response => {...}): Quando la richiesta è completata con successo, la 
                                    risposta (contenente i dati) viene utilizzata per 
                                    aggiornare l'array posts.

           catch(error => {...}): In caso di errore durante la richiesta, l'errore viene 
                                  loggato nella console.


🚀 Funzionalità

Quando il componente viene montato, viene fatta una richiesta HTTP per ottenere una lista 
di post e visualizzarne i titoli all'interno di una lista.

La vista viene automaticamente aggiornata con i dati ricevuti grazie alla reattività di 
Vue.js.

-->
