angular.module('eventJoin.module', [])
	.controller('eventJoinController', function ($scope) {
	    var map;
	    function initMap() {
	        map = new google.maps.Map(document.getElementById('googlemap'), {
                //karta över sverige
	            center: { lat: 62.5421031, lng: 19.7477994 },
	            zoom: 5
	        });
	    }
	    angular.element(document).ready(function () {
            //run when DOM is ready
	        initMap();
	    });
    });