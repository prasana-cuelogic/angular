'use strict';

/* Directives */


objApp = angular.module('myAngularApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  objApp.directive ('ngHeader',function(){
  	return{
  		restrict: 'A',
    	templateUrl: 'partials/partial1.html'
  	}
  });
  objApp.directive ('footer',function(){
  	return {
  		restrict: 'E',
    	templateUrl: 'partials/partial2.html'
  	}
  });
