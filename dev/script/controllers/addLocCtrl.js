/********************/
/* addLocCtrl.js */
;(function() {

	'use strict';

	angular.module('wnApp')
	.controller('addLocCtrl',['$scope', 'datasource', '$timeout',
	function($scope, datasource, $timeout){

		var sc = $scope.sc = {};
		sc.locName = '';

		$scope.addLocation = function(val){

			$scope.searchingForLocation = true;

			datasource
			.searchByCity(val)
			.then(function(data){

				$scope.searchingForLocation = false;


				if(data.cod === "404"){
					$scope.locNotFound = true;
				} else {
					datasource.addLocation(data);
				}

				$timeout(function(){
					sc.locName = '';
					$scope.locChange();
				},100);

				console.log(data);
			},
			function(data){
				$scope.searchingForLocation = false;
				$scope.locNotFound = true;
				console.log('err',data);
			});
		};

		$scope.locChange = function(){
			$scope.validValue = sc.locName !== '';
			$scope.locNotFound = false;
		};


		//	flags for UI elements
		$scope.searchingForLocation = false;
		$scope.validValue = false;
	}]);


})();
