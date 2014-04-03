/***********/
/* main.js */

// a demo weather app
//
// Antonis Karamitros, 3/3/2014
//
;(function(){

	'use strict';

	var wnApp = angular.module('wnApp',[ 'ngRoute', 'ngAnimate' ]);

	wnApp.controller('mainCtrl', ['$scope', '$timeout', 'datasource', function($scope, $timeout, datasource){

		$scope.locations = datasource.getLocations();

		// initialize with :
		//	London
		//	Luton
		//	Manchester
		//	Birmingham

		var refreshTime = function(){
			$scope.timeNow = Date.now();
			$timeout(function(){
				refreshTime();
			},1000);
		};

		refreshTime();

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
