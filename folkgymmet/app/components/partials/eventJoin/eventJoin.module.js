angular.module('eventJoin.module', [])
//controller start
.controller('eventJoinController', function ($scope, appFactory) {
    angular.element(document).ready(function () {
        //run when DOM is ready
        initMap();
        for (i = 0; i < $scope.markersEvent.length; i++) {
            initMarkers($scope.markersEvent[i]); //create initial markers
        }
    });
    //Pre-load document.ready
    function initMap() {
        $scope.mapProp = {
            //karta över sverige
            center: {
                lat: 62.5421031,
                lng: 19.7477994
            },
            zoom: 5,
        };
        $scope.map = new google.maps.Map(document.getElementById('googlemap'), $scope.mapProp);
    }	
    function initMarkers(info) {
        //console.log("initMarkers function");
        new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lang),
            title: "test"
        });
    }
	$scope.markersEvent = appFactory.getInitMarkers(); //get marker objects from app.js factory
})
//END controller

/*
Todo:
- search markers
- Explicit sök (tryck "sök" eller Enter för verkställ) - detta för att undvika lagg om nya res. ständigt visas
- Indicate results: display list of hits in real time in scroll list below search box
- Should be clickable
- only display markers fitting search (or just one of one in suggestion-list is clicked)
- adding markers
- removing markers
- changing markers

*/
