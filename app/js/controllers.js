'use strict';

/* Controllers */

var objApp = angular.module('myAngularApp.controllers', []);
objApp.controller('MyCtrl1', ['$scope', function($scope) {

  }]);
objApp.controller('MyCtrl2', ['$scope', function($scope) {
  }]);

var controllers = {};

controllers.myController = function($scope){
	$scope.client = "World";
}
objApp.controller(controllers);

