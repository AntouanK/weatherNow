/************/
/* route.js */

(function(){

'use strict';

angular.module('wnApp')
.config(['$routeProvider', function($routeProvider){

	//	build some very basic routing for testing the first views
	$routeProvider
	.when('/', {
		templateUrl: 'splash.html'
	})
	.when('/addLoc', {
		templateUrl: 'addLoc.html',
		controller: 'addLocCtrl'
	})
	.when('/location/:locName', {
		templateUrl: 'location.html',
		controller: 'locationCtrl'
	});

}]);

}());
/* route.js */
/************/
