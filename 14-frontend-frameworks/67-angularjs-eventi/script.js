


// Definisce l'app AngularJS e le sue dipendenze
var app = angular.module('myApp', []);

// Definizione del controller "userController" all'interno dell'app AngularJS
app.controller('userController', function($scope, $http) {
    
    // Effettua una richiesta HTTP GET all'API per ottenere una lista di utenti
    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            // Assegna i dati ricevuti all'array "users" nel $scope
            $scope.users = response.data;
        });


    /*
📌 Spiegazione del codice:

app.controller('userController', function($scope, $http) { ... }

    - Crea un controller chiamato "userController", che dipende da $scope e $http.
    - $scope: Permette di legare i dati alla vista HTML.
    - $http: Servizio AngularJS usato per effettuare richieste HTTP.


$http.get('https://jsonplaceholder.typicode.com/users')

    - Effettua una richiesta GET all'API https://jsonplaceholder.typicode.com/users, che 
      restituisce una lista di utenti in formato JSON.

      
.then(function(response) { ... })

    - Quando la richiesta ha successo, esegue la funzione callback.
    - response.data contiene l'array di utenti ricevuti dal server.
    - $scope.users = response.data; salva i dati in $scope.users, permettendo di utilizzarli
      nella vista HTML con ng-repeat.


*/
    

});


// Definizione del controller "myCtrl" all'interno dell'app AngularJS
app.controller('myCtrl', function($scope) {
    
    // Inizializza l'oggetto "user" nel $scope con una proprietà "email" vuota
    $scope.user = { email: "" };
});


