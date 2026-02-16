
// moduli/mioModulo.js
function somma(a, b) {
    return a + b;
}
  
function sottrai(a, b) {
    return a - b;
}
  
  // Esportiamo le funzioni per usarle nel server
  module.exports = { somma, sottrai };
  