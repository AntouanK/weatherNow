/********************/
/* addLocCtrl.js */
;(function() {

	'use strict';

	angular.module('wnApp')
	.controller('addLocCtrl',['$scope', function($scope){


		$scope.addLocation = function(val){
			console.log(val);
		};

		var sc = $scope.sc = {};
		sc.locName = '';

		$scope.locationFound = true;
	}]);


})();
