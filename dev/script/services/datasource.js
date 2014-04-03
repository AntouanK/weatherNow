/*****************/
/* datasource.js */
;(function() {

	'use strict';

	angular.module('wnApp')
	.service('datasource', ['$http', '$q', function($http, $q){

		//	search by city
		this.searchByCity = function(cityName){

			if(cityName === undefined){
				throw Error('no city name defined');
			}

			var deferred = $q.defer();

			$http({
				url: 'http://api.openweathermap.org/data/2.5/weather',
				params: {
					q: cityName,
					units: 'metric'
				},
				method: 'GET'
			})
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data, status, headers){
				console.log('ERROR on getting the login (user)');
				// handle here a connection error, NOT an API error
				deferred.reject(data, status, headers);
			});

			return deferred.promise;
		};


		this.addLocation = function(location){

			this.locations.push(location);
		};

		this.locations = [];

		this.getLocations = function(){
			return this.locations;
		};

		this.getLocation = function(locName){

			var location;

			this.locations.forEach(function(loc){
				if(loc.name === locName){
					location = loc;
					return true;
				}
			});

			return location;
		};

	}]);

}());
/* datasource.js */
/*****************/
