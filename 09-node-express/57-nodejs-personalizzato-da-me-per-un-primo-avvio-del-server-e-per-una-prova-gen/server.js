
const express = require("express");
const { somma, sottrai } = require("./moduli/mioModulo");

const app = express();

// Servire file statici (HTML, JS, CSS)
app.use(express.static("public"));

// Endpoint API per ottenere i risultati
app.get("/calcola", (req, res) => {
  const a = 5;
  const b = 3;
  res.json({
    somma: somma(a, b),
    differenza: sottrai(a, b)
  });
});

// Avvia il server
app.listen(3001, () => {
  console.log("Server avviato su http://localhost:3001");
});
