angular.module('google-map.module', ['search-bar.module'])
.controller('google-map.controller', function ($scope, appFactory, searchFactory, googleFactory) {
	$scope.apiMap = googleFactory;
	$scope.apiApp = appFactory;
	$scope.apiSearch = searchFactory;
	$scope.mapOptions = $scope.apiMap.mapOptions;
	$scope.events = $scope.apiApp.eventsAll; //events to base new markers on (long/lat)
	$scope.gMarkers = []; //google markers array
	//$scope.bounds = $scope.apiMap.getBounds();
})
.factory('googleFactory', function () {
	return {
		mapOptions : {
			//karta över sverige
			center : {
				lat : 62.5421031,
				lng : 19.7477994
			},
			zoom : 5,
		},
		setMapOptions : function (bounds, zoom) { //re-set mapOptions upon searching events (markers)
			this.mapOptions.center.lat = bounds.getCenter().lat();
			this.mapOptions.center.lng = bounds.getCenter().lng();
			this.mapOptions.zoom = zoom;
		},
		hiddenMarkers : null,
		setHiddenMarkers : function (arrGoogleMarkers) {
			this.hiddenMarkers = arrGoogleMarkers;
		},
		visibleMarkers : null,
		setVisibleMarkers : function (arrGoogleMarkers) {
			this.visibleMarkers = arrGoogleMarkers;
		}
	}
}) //googleFactory END
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
				createMap();
				for (i = 0; i < scope.events.length; i++) {
					createMarkers(scope.events[i]); //(re-)create new markers
				}
				scope.hiddenMarkers = scope.apiMap.hiddenMarkers;
				if (scope.hiddenMarkers != null) {
					hideMarkers(scope.gMarkers, scope.hiddenMarkers); //hide gMarkers if earlier set to hidden
				}
			});
			function createMap() {
				scope.map = new google.maps.Map(document.getElementById(attr.id), scope.mapOptions);
				//scope.map.fitBounds(scope.bounds);
			}
			function createMarkers(event) {
				marker = new google.maps.Marker({
						map : scope.map,
						position : new google.maps.LatLng(event.lat, event.lang),
						id : event.id
						//title: "test"
					});
				scope.gMarkers.push(marker);
			}
			function hideMarkers(markers, hiddenMarkers) { //hide markers
				//console.log(hiddenMarkers)
				var visible;
				for (i = 0; i < markers.length; i++) {
					for (j = 0; j < hiddenMarkers.length; j++)
						if (markers[i].id == hiddenMarkers[j].id) {
							visible = hiddenMarkers[j].getVisible();
							markers[i].setVisible(visible);
						}
				}
				scope.apiMap.setHiddenMarkers(markers); //set hidderMarkers to new list
			}
			scope.$watch('apiSearch.filteredMarkers', function (newValue, oldValue) {
				if (newValue !== oldValue) {
					markersSearchResult(scope.apiSearch.filteredMarkers);
				}
			});
			function markersSearchResult(arrSearchMarkers) {
				var arrSearchMarkersTmp = [];
				if (arrSearchMarkers.length == 0) { //array is empty (search empty)
					for (i = 0; i < scope.gMarkers.length; i++) {
						scope.gMarkers[i].setVisible(true); //set all markers to visible
					}
					scope.apiMap.setHiddenMarkers(scope.gMarkers); //hidden markers will all be visible
					zoomToMarkers(scope.gMarkers);
				} else {
					for (i = 0; i < scope.gMarkers.length; i++) {
						scope.gMarkers[i].setVisible(false); //hide all markers before
					}
					for (i = 0; i < scope.gMarkers.length; i++) {
						for (j = 0; j < arrSearchMarkers.length; j++) {
							if (arrSearchMarkers[j].id == scope.gMarkers[i].id) {
								scope.gMarkers[i].setVisible(true);
								arrSearchMarkersTmp.push(scope.gMarkers[i]); //gMarkers where visible is true
								break;
							}
						}
					}
					scope.apiMap.setHiddenMarkers(scope.gMarkers); //pass gMarkers to set which markers are hidden
					zoomToMarkers(arrSearchMarkersTmp);
				}
			} //markersSearchResult END
			function zoomToMarkers(arrSearchMarkersTmp) {
				var markersVisible = arrSearchMarkersTmp;
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0; i < markersVisible.length; i++) {
					bounds.extend(markersVisible[i].getPosition());
				}
				scope.map.fitBounds(bounds);
				// set a minimum zoom
				// if you got only 1 marker or all markers are on the same address map will be zoomed too much.

				if (scope.map.getZoom() > 15) {
					scope.map.setZoom(15);
				}
				var zoom = scope.map.getZoom();
				scope.apiMap.setMapOptions(bounds, zoom); //save new mapOptions in factory
			} //zoomToMarkers END
		} //Link END
	} //return END
}) //Directive END
