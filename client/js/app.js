var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'views/login.html'
    })
    .when('/dash', {
        templateUrl:'views/dash.html'
    })
    .when('/new', {
        templateUrl:'views/new.html'
    })
    .when('/show/:id', {
        templateUrl:'views/show.html'
    })
})
