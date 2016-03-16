angular.module('eventJoin.module', [])
//'uiGmapgoogle-maps','nemLogging'
	.controller('eventJoinController', function ($scope) {
	    var map;
	    function initMap() {
	        $scope.mapProp = {
                //karta över sverige
	            center: { lat: 62.5421031, lng: 19.7477994 },
	            zoom: 5,
				cords: {lat: 62.5421031, lng: 19.7477994}
	        };
			new google.maps.Map(document.getElementById('googlemap'), $scope.mapProp);
	    }
	    angular.element(document).ready(function () {
            //run when DOM is ready
	        initMap();
	    });
    });