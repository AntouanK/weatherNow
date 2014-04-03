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
			 $location.path('');
		}

		$scope.loc = loc;

		console.log(loc);
	}]);

})();

/* locationCtrl.js */
/*******************/
