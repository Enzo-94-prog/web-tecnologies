


// Definisce l'app AngularJS e le sue dipendenze
var app = angular.module('myApp', []);

// Definizione del controller "myCtrl" all'interno dell'app AngularJS
app.controller('myCtrl', function($scope) {
    
    // Inizializza l'oggetto "user" nel $scope con una proprietà "email" vuota
    $scope.user = { email: "" };
});