angular.module('indiegogo', [
    'indiegogo.services',
    'indiegogo.api',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/api/api.html',
        controller: 'apiController'
      })
      .otherwise('/');
  });