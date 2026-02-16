


// Definisce l'app AngularJS e le sue dipendenze
var app = angular.module('myApp', []);

// Definizione del controller "MyController" nell'app AngularJS
app.controller('MyController', function($scope) {

    // Inizializza l'oggetto "user" come oggetto vuoto
    $scope.user = {};

    // Funzione chiamata quando il form viene inviato
    $scope.submitForm = function() {
        alert("La form è stata inviata!"); // Mostra un alert di conferma
    };
});
