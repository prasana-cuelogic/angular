'use strict';

/* Directives */


angular.module('myAngularApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive ('ngHeader',function(){
  	return function(){
  		
  	}
  })
  ;


