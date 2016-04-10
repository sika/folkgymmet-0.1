angular.module('google-map.module', ['search-bar.module'])
.controller('google-map.controller', function ($scope, appFactory, searchFactory, googleFactory) {
    $scope.apiMap = googleFactory;
    $scope.apiApp = appFactory;
    $scope.mapOptions = $scope.apiMap.getOptions();
    $scope.events = $scope.apiApp.getEventsAll();    
    $scope.apiSearch = searchFactory;
    /*
    $scope.appFactory = appFactory;
	$scope.eventsAll = appFactory.getEventsAll(); //get marker objects from app.js factory using parent scope
	$scope.visibleMarkers = appFactory.getVisibleMarkers(); //get visible markers
	$scope.gMarkers = appFactory.getGoogleMarkers();
	console.log($scope.gMarkers);
    */
})
.directive('dGoogleMap', function () {
	return {
		restrict : 'E',
		controller : 'google-map.controller',
		//template: '<div></div>',
		//replace: true,
		link : function (scope, elem, attr) {
			//var gMarkers = [];
			angular.element(document).ready(function () {
				//run when DOM is ready
			    loadMap();
			    scope.apiMap.removeMarkers(); //remove all markers; otherwise there will be duplicates (re-adding already added in setMarkers() )
				for (i = 0; i < scope.events.length; i++) {
				    setMarkers(scope.events[i]); //set markers
				}
				scope.markers = scope.apiMap.getGoogleMarkers();
				scope.hiddenMarkers = scope.apiMap.getHiddenMarkers();
				console.log(scope.hiddenMarkers);
			    hideMarkers(scope.markers, scope.hiddenMarkers); //hide markers if earlier set to hidden
			});
			function loadMap() {
			    scope.map = new google.maps.Map(document.getElementById(attr.id), scope.mapOptions);
			}
			function setMarkers(event) {
				marker = new google.maps.Marker({
						map : scope.map,
						position: new google.maps.LatLng(event.lat, event.lang),
						id: event.id
						//title: "test"
					});
			    //gMarkers.push(marker);
				scope.apiMap.setGoogleMarker(marker);
			}
			function hideMarkers(markers, hiddenMarkers) { //hide markers
			    for (i = 0; i < markers.length; i++) {
			        for (j = 0; j < hiddenMarkers.length; j++)
			            if (markers[i].id == hiddenMarkers[j].id) {
			                markers[i].setVisible(false);
			            }
			    }
			    scope.apiMap.setHiddenMarker(markers); //set hidderMarkers to new list
			}
			scope.$watch('apiSearch.filteredMarkers', function (newValue, oldValue) {
			    console.log("search watch");
			    if (newValue !== oldValue) {
			        console.log("search watch changed");
				    markersSearchResult(scope.apiSearch.filteredMarkers);
				}
			});
			function markersSearchResult(arrMarkers) {
				var arrMarkersTmp = [];
				if (arrMarkers.length == 0) { //array is empty (search empty)
				    for (i = 0; i < scope.markers.length; i++) {
				        scope.markers[i].setVisible(true); //set all markers to visible
				    }
				    scope.apiMap.setHiddenMarker(markers); //hidden markers will all be visible
				    //zoomToMarkers(markers);
				} else {
				    for (i = 0; i < scope.markers.length; i++) {
						scope.markers[i].setVisible(false); //hide all markers before
					}
					for (i = 0; i < scope.markers.length; i++) {
						for (j = 0; j < arrMarkers.length; j++) {
							if (arrMarkers[j].id == scope.markers[i].id) {
							    scope.markers[i].setVisible(true);
							    arrMarkersTmp.push(scope.markers[i]);
								break;
							}
						}
					}
					scope.apiMap.setHiddenMarker(scope.markers);
					zoomToMarkers(arrMarkersTmp);
				}
			} //markersSearchResult END
			function zoomToMarkers(arrMarkersTmp) {
                /*
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
                */
			} //zoomToMarkers END
		} //Link END
	} //return END
}) //Directive END
