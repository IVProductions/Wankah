 <!-- Declare a module -->
var Wanker = angular.module('Wanker', []);

<!--Routing-->
Wanker.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/login.html",
        controller:"loginCtrl"
    }).when("/menu",{
        templateUrl:"app/partials/menu.html",
        controller:"loginCtrl"
    }).otherwise({
        redirectTo:"/"
    })
});

