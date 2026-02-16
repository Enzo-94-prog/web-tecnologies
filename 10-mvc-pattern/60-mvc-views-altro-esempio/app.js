
// Importa il modulo Express
const express = require('express');

// Inizializza l'applicazione Express
const app = express();

const path = require('path'); // Importazione del modulo 'path' per gestire i percorsi dei file

// Definisce la porta su cui il server sarà in ascolto
const port = 3001;



// Configurare la cartella in cui Express cercherà i file di vista
app.set('views', path.join(__dirname, 'views'));

// Imposta EJS come motore di visualizzazione
app.set('view engine', 'ejs');

// Importa il router
const myformRouter = require('./routes/myform');
// Usa il router con il prefisso '/myform'
app.use('/myform', myformRouter);



// Route per la homepage
app.get('/', (req, res) => {
    // Titolo della pagina
    const title = 'Homepage';

    // Lista di elementi da visualizzare
    const items = [                  // array di oggetti
        { id: 1, name: 'Item 1' }, 
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    // Renderizza la vista "index.ejs" passando il titolo e gli elementi
    res.render('index', { title, items });
});

// Route dinamica per visualizzare un singolo elemento
app.get('/item/:id', (req, res) => {
    // Ottiene l'ID dall'URL
    const id = req.params.id;

    // Crea un oggetto item con l'ID ricevuto
    const item = { id, name: `Item ${id}` };

    // Renderizza la vista "item.ejs" passando l'oggetto item
    res.render('item', { item });
});


// Avvia il server e ascolta sulla porta definita
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

/* Funzionamento:
La homepage / renderizza index.ejs, passando un titolo e una lista di elementi.
La rotta /item/:id cattura l'ID dall'URL e passa un oggetto item alla vista item.ejs.
Il server è in ascolto sulla porta 3000 e stampa un messaggio in console. */



