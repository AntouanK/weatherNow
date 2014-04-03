/*******************/
/* locationCtrl.js */
;(function() {

	'use strict';

	angular.module('wnApp')
	.controller('locationCtrl',['$scope', '$route', 'datasource', '$location',
	function($scope, $route, datasource, $location){

		var loc = datasource.getLocation($route.current.params.locName);

		//	if location is not ready, go home
		if(loc === undefined){
			return $location.path('');
		}

		$scope.loc = loc;
		console.log(loc, loc.weather[0].main);

		switch(loc.weather[0].main){
		case 'Clear':
			$scope.weatherIcon = 'clear';
			break;
		case 'Haze':
			$scope.weatherIcon = 'haze';
			break;
		case 'Clouds':
			$scope.weatherIcon = 'clouds';
			break;
		}
	}]);

})();

/* locationCtrl.js */
/*******************/
