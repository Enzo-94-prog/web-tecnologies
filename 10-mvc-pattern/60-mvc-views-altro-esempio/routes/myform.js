

// Importa Express
const express = require('express');

// Crea un router Express
const router = express.Router();

// Importa il modulo body-parser per gestire i dati dei form
const bodyParser = require('body-parser');


// Usa body-parser per gestire i dati inviati tramite form (application/x-www-form-urlencoded)
router.use(bodyParser.urlencoded({ extended: false }));

// Route GET per visualizzare il form
router.get('/', (req, res) => {
    res.render('form'); // Renderizza la vista "form.ejs"
});

// Route POST per gestire l'invio del form
router.post('/', (req, res) => {
    // Estrae i dati inviati dal form
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Renderizza la vista "success.ejs" passando i dati ricevuti
    res.render('success', { name, email, message });
});

// Esporta il router per poterlo usare nell'app principale
module.exports = router;

/* Funzionamento:
GET / → Mostra il form HTML (form.ejs).
POST / → Riceve i dati del form, li estrae da req.body, e li passa alla vista success.ejs.
body-parser → Necessario per analizzare i dati inviati tramite form in req.body.
*/