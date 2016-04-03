angular.module('eventJoin.module', [])
//controller start
.controller('eventJoinController', function ($scope, appFactory) {
    console.log($scope);
    //$scope.markersEvent = appFactory.getInitMarkers(); //get marker objects from app.js factory
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
