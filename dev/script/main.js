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

		//	bind to the locations in the datasource so we can display them at any time
		$scope.locations = datasource.getLocations();

		//	small interval function to refresh the clock
		var refreshTime = function(){
			$scope.timeNow = Date.now();
			$timeout(function(){
				refreshTime();
			},1000);
		};

		refreshTime();


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
