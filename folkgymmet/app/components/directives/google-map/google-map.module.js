﻿angular.module('google-map.module', ['search-bar.module'])
.controller('google-map.controller', function($scope, appFactory, searchFactory){
			console.log(searchFactory);
			//$scope.api = searchFactory;
			//$scope.$watch('api.search', toggledisplay)
            $scope.markersEvent = appFactory.getInitMarkers(); //get marker objects from app.js factory using parent scope
        })
.directive('dGoogleMap', function () {
    return {
        restrict: 'E',
        controller: 'google-map.controller',
        //template: '<div></div>',
        //replace: true,
        link: function (scope, elem, attr) {
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
                    center: {
                        lat: 62.5421031,
                        lng: 19.7477994
                    },
                    zoom: 5,
                };
                scope.map = new google.maps.Map(document.getElementById(attr.id), scope.mapProp);
            }
            function initMarkers(info) {
                new google.maps.Marker({
                    map: scope.map,
                    position: new google.maps.LatLng(info.lat, info.lang),
                    //title: "test"
                });
            }
        }
    }
})