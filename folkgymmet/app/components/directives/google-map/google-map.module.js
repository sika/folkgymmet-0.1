angular.module('google-map.module', ['search-bar.module'])
.controller('google-map.controller', function ($scope, appFactory, searchFactory) {

	$scope.api = searchFactory;
	//console.log($scope.api.filteredMarkers);

	$scope.markersEvent = appFactory.getInitMarkers(); //get marker objects from app.js factory using parent scope
})
.directive('dGoogleMap', function () {
	return {
		restrict : 'E',
		controller : 'google-map.controller',
		//template: '<div></div>',
		//replace: true,
		link : function (scope, elem, attr) {
			//console.log(scope.api);
			var gMarkers = [];
			angular.element(document).ready(function () {
				//run when DOM is ready
				initMap();
				for (i = 0; i < scope.markersEvent.length; i++) {
					initMarkers(scope.markersEvent[i]); //create initial markers
				}
			});

			function initMap() {
				scope.mapProp = {
					//karta över sverige
					center : {
						lat : 62.5421031,
						lng : 19.7477994
					},
					zoom : 5,
				};
				scope.map = new google.maps.Map(document.getElementById(attr.id), scope.mapProp);
			}
			function initMarkers(info) {
				marker = new google.maps.Marker({
						map : scope.map,
						position : new google.maps.LatLng(info.lat, info.lang),
						id: info.id
						//title: "test"
					});
				gMarkers.push(marker);
			}
			scope.$watch('api.filteredMarkers', function (newValue, oldValue) {
				if (newValue !== oldValue) {
					//console.log("value changed:");
					//console.log(scope.api.filteredMarkers);
					markersSearchResult(scope.api.filteredMarkers);
				}
			});
			function markersSearchResult(arrMarkers) {
				
				/*
				for (i = 0; i <  arrMarkers.length; i++) {
					for(j = 0; j < gMarkers.length; j++){
						if(arrMarkers[i].id == gMarkers[j].id){
							console("id match");
							break;
						}
						
					}
					
					gMarkers[i].setVisible(false);
				}
				if (marker.category == category || category.length === 0) {
					marker.setVisible(true);
				}
				*/
			}
		} //Link END
	} //return END
}) //Directive END
