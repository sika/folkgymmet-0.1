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
- Explicit s�k (tryck "s�k" eller Enter f�r verkst�ll) - detta f�r att undvika lagg om nya res. st�ndigt visas
- Indicate results: display list of hits in real time in scroll list below search box
- Should be clickable
- only display markers fitting search (or just one of one in suggestion-list is clicked)
- adding markers
- removing markers
- changing markers

*/
