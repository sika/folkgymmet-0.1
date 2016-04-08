angular.module('google-map.module', ['search-bar.module'])
.controller('google-map.controller', function ($scope, appFactory, searchFactory) {
	$scope.api = searchFactory;
	$scope.markersEvent = appFactory.getInitMarkers(); //get marker objects from app.js factory using parent scope
	$scope.visibleMarkers = appFactory.getVisibleMarkers(); //get visible markers
	console.log(appFactory);
})
.directive('dGoogleMap', function () {
	return {
		restrict : 'E',
		controller : 'google-map.controller',
		//template: '<div></div>',
		//replace: true,
		link : function (scope, elem, attr) {
			var gMarkers = [];
			angular.element(document).ready(function () {
				//run when DOM is ready
				initMap();
				for (i = 0; i < scope.markersEvent.length; i++) {
					initMarkers(scope.markersEvent[i]); //create initial markers
				}
			});

			function initMap() {
				scope.mapOptions = {
					//karta över sverige
					center : {
						lat : 62.5421031,
						lng : 19.7477994
					},
					zoom : 5,
				};
				scope.map = new google.maps.Map(document.getElementById(attr.id), scope.mapOptions);
			}
			function initMarkers(info) {
				marker = new google.maps.Marker({
						map : scope.map,
						position : new google.maps.LatLng(info.lat, info.lang),
						id : info.id
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
				var arrMarkersTmp = [];
				if (arrMarkers.length == 0) { //array is empty (search empty)
					for (i = 0; i < gMarkers.length; i++) {
						gMarkers[i].setVisible(true); //show all markers
					}
					zoomToMarkers(gMarkers);
				} else {
					for (i = 0; i < gMarkers.length; i++) {
						gMarkers[i].setVisible(false); //hide all markers before
					}
					for (i = 0; i < gMarkers.length; i++) {
						//search is zero/nothing?
						for (j = 0; j < arrMarkers.length; j++) {
							if (arrMarkers[j].id == gMarkers[i].id) {
								gMarkers[i].setVisible(true);
								arrMarkersTmp.push(gMarkers[i]);
								break;
							}
						}
					}
					zoomToMarkers(arrMarkersTmp);
				}
			} //markersSearchResult END
			function zoomToMarkers(arrMarkersTmp) {
				var markers = arrMarkersTmp;
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0; i < markers.length; i++) {
					bounds.extend(markers[i].getPosition());
				}
				scope.map.fitBounds(bounds);
				//remove one zoom level to ensure no marker is on the edge.
				//scope.map.setZoom(scope.map.getZoom() - 1);
				// set a minimum zoom
				// if you got only 1 marker or all markers are on the same address map will be zoomed too much.
				if (scope.map.getZoom() > 15) {
					scope.map.setZoom(15);
				}
			} //zoomToMarkers END
		} //Link END
	} //return END
}) //Directive END
