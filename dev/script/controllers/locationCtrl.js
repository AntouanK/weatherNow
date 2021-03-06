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

		//	set the location to the one selected
		$scope.loc = loc;

		//	change the icon according to the weather
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
		case 'Rain':
			$scope.weatherIcon = 'rain';
			break;
		}
	}]);

})();

/* locationCtrl.js */
/*******************/
