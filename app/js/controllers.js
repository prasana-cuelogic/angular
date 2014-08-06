'use strict';

/* Controllers */

var objApp = angular.module('myAngularApp.controllers', []);
objApp.controller('MyCtrl_1', ['$scope', function($scope) {

  }]);
objApp.controller('MyCtrl_2', ['$scope', function($scope) {
  }]);

var controllers = {};

controllers.headerMenu = function($scope){
	$scope.arrMenu = [
	{url:'#/', title:'Home'},
	{url:'#/about-us', title:'About Me'}, 
	{url:'#/join-us', title:'Join Us'}, 
	{url:'#/cuelogic/clients', title:'Client'}
	];
};

controllers.footerMenu = function($scope){
	$scope.arrMenu = [{url:'#/terms-and-conditions', title:'Terms & Conditions'}];
};
controllers.termsConditonsController = function ($scope){
	$scope.pageTitle = "Terms And Conditions";
}

controllers.aboutUsController = function ($scope){
	$scope.pageTitle = " About Us";
}

controllers.joiinUsController = function ($scope){
	$scope.pageTitle = "Join Us";
}

controllers.clientsController = function ($scope){
	$scope.pageTitle = "Cuelogic Client";
}

controllers.myController = function ($scope){
	$scope.pageTitle = "Home Page";	
}
objApp.controller(controllers);

