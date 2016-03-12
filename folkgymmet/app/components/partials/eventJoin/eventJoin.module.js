angular.module('eventJoin.module', [])
	.controller('eventJoinController', function ($scope) {
	    function initMap() {
	        $scope.mapDiv = document.getElementById('googlemap');
	        $scope.map = new google.maps.Map($scope.mapDiv, {
	            center: { lat: 44.540, lng: -78.546 },
	            zoom: 8
	        });
        }
    });