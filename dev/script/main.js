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

		// initialize with :
		//	London
		//	Luton
		//	Manchester
		//	Birmingham

		datasource
		.searchByCity('London,uk')
		.then(function(data){

			datasource.addLocation(data);
		});

		datasource
		.searchByCity('Luton,uk')
		.then(function(data){

			datasource.addLocation(data);
		});

		datasource
		.searchByCity('Manchester,uk')
		.then(function(data){

			datasource.addLocation(data);
		});

		datasource
		.searchByCity('Birmingham,uk')
		.then(function(data){

			datasource.addLocation(data);
		});

	}]);
}());

/* main.js */
/***********/
