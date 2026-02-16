

// Importa il modulo express per creare il server
const express = require('express');

// Crea una nuova applicazione Express
const app = express();

// Importa la libria mongoose
const mongoose = require('mongoose');


/* Il codice utilizza Mongoose, una libreria per interagire con MongoDB, per connettersi a 
   un database e svolgere operazioni su di esso. */



// Funzione per connettersi al database
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://<username>:<pwd>@mydb.twv6equ.mongodb.net/<collection>', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }


    /* - mongoose.connect(): stabilisce la connessione con il database MongoDB, utilizzando 
                             le opzioni useNewUrlParser e useUnifiedTopology per migliorare
                             la gestione delle connessioni.

       - Gestione errori (try-catch): se la connessione fallisce, viene stampato un errore. */
}



// Funzione per elencare le collezioni presenti nel database
async function listCollections() {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log(collections);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }


    /* mongoose.connection.db ->  Accede all'oggetto db della connessione attiva a MongoDB.
                                  Questa proprietà è disponibile solo dopo che Mongoose ha 
                                  stabilito una connessione al database. 
       
       listCollections() -> Restituisce un cursore con l'elenco delle collezioni del database
                            attuale. Un cursore in MongoDB è un oggetto iterabile che 
                            permette di scorrere i risultati di una query in modo efficiente,
                            senza caricare tutti i dati in memoria contemporaneamente.Quando 
                            si esegue una query su MongoDB (ad esempio find() o 
                            listCollections()), il database non restituisce direttamente un 
                            array di risultati, ma un cursore che può essere iterato per 
                            ottenere i documenti uno alla volta.
      
       toArray() -> Converte il cursore in un array di oggetti contenenti informazioni sulle
                    collezioni.
       
       await -> Poiché listCollections() è un'operazione asincrona, await permette di 
                attendere il completamento prima di procedere.  */
}



// Funzione per ottenere la prima collezione del database e stampare i suoi documenti
async function getFirstCollection() {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const firstCollection = collections[0];
        console.log(firstCollection.name);

        // Creazione di un modello dinamico per la prima collezione trovata nel database
        const Model = mongoose.model(firstCollection.name, new mongoose.Schema({}), firstCollection.name);
        /* mongoose.model(): viene utilizzato per definire un modello Mongoose che rappresenta
                             una collezione MongoDB. La sua sintassi è:
                             mongoose.model(nomeModello, schema, nomeCollezione);
                             Dove:
                             nomeModello → Nome logico del modello usato da Mongoose.
                             schema → Schema dei documenti nella collezione.
                             nomeCollezione (opzionale) → Il nome effettivo della collezione 
                                                          in MongoDB.  */
           
        /* firstCollection.name → Viene usato sia come nome del modello che come nome della 
                                  collezione.
           📌 Questo significa che il modello prenderà il nome della prima collezione trovata
               nel database.
         
           new mongoose.Schema({}) → Uno schema vuoto, quindi accetterà qualsiasi 
                                        struttura di documento dalla collezione.
           📌 Non è consigliato perché Mongoose non potrà applicare alcuna validazione sui 
               dati.
           
           firstCollection.name (terzo parametro) → Specifica il nome esatto della collezione
                                                    MongoDB per evitare che Mongoose lo 
                                                    modifichi automaticamente (aggiungendo 
                                                    la forma plurale, ad esempio da user a 
                                                    users). */



        // Ricerca di tutti i documenti nella collezione
        const documents = await Model.find({});
        console.log(documents);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

// Funzione per cercare un documento specifico nella collezione "users"
async function searchDocument() {
    try {
        const Model = mongoose.model('User', new mongoose.Schema({ name: String }), 'users');
        
        // Ricerca di un documento con nome "Paolo Bianchi"
        const document = await Model.findOne({ name: 'Paolo Bianchi' });
        console.log(document);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

// Funzione per ottenere tutti i documenti dalla collezione "users"
async function searchDocuments() {
    try {
        const Model = mongoose.model('User', new mongoose.Schema({ name: String }), 'users');
        
        // Ricerca di tutti i documenti nella collezione "users"
        const documents = await Model.find({});
        console.log(documents);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

// Connessione al database ed esecuzione della funzione searchDocuments
connect()
    //.then(() => listCollections())
    //.then(() => getFirstCollection())
    //.then(() => searchDocument())
    .then(() => searchDocuments())
    .catch((error) => console.error(error));
