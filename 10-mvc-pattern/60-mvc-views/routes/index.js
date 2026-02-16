

// Definisci le rotte dell'applicazione
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

// Associa le rotte all'app
app.use('/', indexRouter);  // Rotta principale
app.use('/users', userRouter);  // Rotta per gli utenti
app.use('/posts', postRouter);  // Rotta per i post



// Definisce una route GET che risponde all'URL "/hello/:name"
// ":name" è un parametro dinamico che verrà catturato dalla richiesta
app.get('/hello/:name', (req, res) => {
    
    // Estrae il valore del parametro "name" dalla richiesta
    const name = req.params.name;
    
    // Renderizza la vista "hello.ejs" e passa il valore del parametro alla vista
    res.render('hello', { name });



/* Funzionamento:
Quando un utente visita /hello/Mario, il valore "Mario" viene catturato da req.params.name.
Questo valore viene passato alla vista hello.ejs come variabile { name }.
Il file views/hello.ejs può quindi usare <%= name %> per mostrare il nome nella pagina.

*/
});
