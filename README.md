# Tecnologie Web – Portfolio & Lab Book (HTML, CSS, JavaScript)

Raccolta **curata** di laboratori/esercizi svolti durante il corso di *Tecnologie Web*: una via di mezzo tra **portfolio** (prove pratiche) e **quaderno di appunti** (progressione per argomenti).

> Nota: questa repo include solo **codice sorgente** e materiali utili. Le dipendenze (`node_modules`) sono volutamente escluse: per eseguire i progetti Node/React basta installarle con `npm install`.

## Cosa trovi qui
- **Fondamentali Web**: HTML, form, CSS (box-model, display, positioning)
- **JavaScript**: oggetti/array, JSON
- **DOM**: manipolazione, eventi, form, mini-progetto TODO
- **UI**: Bootstrap (grid/flex), jQuery + AJAX
- **Backend**: Node.js, Express, MVC, middleware, auth (Passport/OAuth), chiamate HTTP (Axios)
- **Database & dati**: MongoDB, esempi con file JSON
- **Realtime**: WebSockets, Socket.io
- **Frontend frameworks**: Vue, AngularJS, React (starter app)

## Struttura
Le cartelle sono raggruppate per macro-argomento (numerazione = ordine logico):
- `01-html/`, `02-css/`, `03-javascript/`, `04-dom/`
- `05-http-cookies/`, `06-data-formats/`
- `07-bootstrap/`, `08-jquery/`
- `09-node-express/`, `10-mvc-pattern/`, `11-auth-middleware/`, `12-databases/`
- `13-realtime-websockets/`
- `14-frontend-frameworks/`


## Come eseguire i progetti (Node / React / Vue)
Se in una cartella trovi un `package.json`:

```bash
npm install
npm run start   # oppure: npm start
```

Se esiste uno script diverso, lo trovi in `package.json` (sezione `scripts`).

## Highlights 
- **TODO list** (DOM + eventi) → `04-dom/`
- **Express + pattern MVC** → `10-mvc-pattern/`
- **WebSockets / Socket.io** → `13-realtime-websockets/`
- **React starter app** → `14-frontend-frameworks/69-react/my-app/`

---

### English (quick)
Curated collection of web-development labs from a university course. Source-only (no `node_modules`).  
For Node/React projects: `npm install` then `npm start`.
