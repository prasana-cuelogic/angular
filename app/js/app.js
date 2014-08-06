'use strict';


// Declare app level module which depends on filters, and services
angular.module('myAngularApp', [
  'ngRoute',
  'myAngularApp.filters',
  'myAngularApp.services',
  'myAngularApp.directives',
  'myAngularApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/root.html', controller: 'myController'});
  $routeProvider.when('/about-us', {templateUrl: 'partials/about_us.html', controller: 'aboutUsController'});
  $routeProvider.when('/join-us', {templateUrl: 'partials/careers.html', controller: 'joiinUsController'});
  $routeProvider.when('/cuelogic/clients', {templateUrl: 'partials/clients.html', controller: 'clientsController'});
  $routeProvider.when('/terms-and-conditions', {templateUrl: 'partials/terms_conditions.html', controller: 'termsConditonsController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
