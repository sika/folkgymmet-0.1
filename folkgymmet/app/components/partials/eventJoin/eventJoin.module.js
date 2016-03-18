angular.module('eventJoin.module', [])
//controller start
.controller('eventJoinController', function ($scope) {
	angular.element(document).ready(function () {
		//run when DOM is ready
		console.log($scope.markersEvent[0].city);
		initMap();
		for (i = 0; i < $scope.markersEvent.length; i++) {
			initMarkers($scope.markersEvent[i]); //create initial markers
		}
		//['shit', 'koka']
		//value : value.city
		jQuery("#tags").autocomplete({
			source : function (request, response) {
				response(jQuery.map($scope.markersEvent, function (value, key) {
						return {
							label : value.city,
							value : value.id
						}
					}));
			}
		});
	});
	//Pre-load document.ready
	function initMap() {
		$scope.mapProp = {
			//karta �ver sverige
			center : {
				lat : 62.5421031,
				lng : 19.7477994
			},
			zoom : 5,
		};
		$scope.map = new google.maps.Map(document.getElementById('googlemap'), $scope.mapProp);
	}
	function initMarkers(info) {
		console.log("initMarkers function");
		new google.maps.Marker({
			map : $scope.map,
			position : new google.maps.LatLng(info.lat, info.lang),
			title : "test"
		});
	}
	$scope.markersEvent = [{
			city : 'G�teborg',
			desc : 'This is the best city in the world!',
			lat : 57.716610,
			lang : 11.973904
		}, {
			city : 'Stockholm',
			desc : 'Shit city',
			lat : 59.336574,
			lang : 18.067879
		}, {
			city : 'Kiruna',
			desc : 'Shit city',
			lat : 67.858475,
			lang : 20.225530
		}
	];
})
//END controller
//Directive start
.directive('domMan', function () {
	return {
		restrict : 'A',
		template :
		'Name: ',
		link : function (scope, element, attr) {
			$("#tags").autocomplete({
				source : ['shit', 'koka']
			});
		}
	}
});
//END Directive
//data
/*
var markersEvent = [{
city : 'G�teborg',
desc : 'This is the best city in the world!',
lat : 57.716610,
lang : 11.973904
}, {
city : 'Stockholm',
desc : 'Shit city',
lat : 59.336574,
lang : 18.067879
}, {
city : 'Kiruna',
desc : 'Shit city',
lat : 67.858475,
lang : 20.225530
}
];
 */
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
