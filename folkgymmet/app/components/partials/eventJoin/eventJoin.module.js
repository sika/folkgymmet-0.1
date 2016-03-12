angular.module('eventJoin.module', [])
	.controller('eventJoinController', function ($scope) {
	    var map;
	    function initMap() {
	        map = new google.maps.Map(document.getElementById('googlemap'), {
	            center: { lat: -34.397, lng: 150.644 },
	            zoom: 8
	        });
	    }
	    angular.element(document).ready(function () {
            //run when DOM is ready
	        initMap();
	    });
    });