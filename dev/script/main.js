/***********/
/* main.js */

// a demo weather app
//
// Antonis Karamitros, 3/3/2014
//
;(function(){

	'use strict';

	var wnApp = angular.module('wnApp',[ 'ngRoute' ]);

	wnApp.controller('mainCtrl', ['$scope', 'datasource', function($scope, datasource){

		$scope.locations = datasource.getLocations();
	}]);
}());

/* main.js */
/***********/
