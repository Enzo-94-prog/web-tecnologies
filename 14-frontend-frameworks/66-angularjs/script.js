


// Definisce l'app AngularJS e le sue dipendenze


var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope) {
    $scope.greeting = 'Welcome to my AngularJS app!';
});