angular.module('eventJoin.module', [])
//'uiGmapgoogle-maps','nemLogging'
	.controller('eventJoinController', function ($scope) {
		angular.element(document).ready(function () {
            //run when DOM is ready
	        initMap();
			
			//createMarkers(markersEvent[0]);
	    });
			    
	    function initMap() {
	        $scope.mapProp = {
                //karta över sverige
	            center: { lat: 62.5421031, lng: 19.7477994 },
	            zoom: 5,
	        };
			$scope.map = new google.maps.Map(document.getElementById('googlemap'), $scope.mapProp);
			}
			function createMarkers(info){
				console.log("createMarkers function");
				new google.maps.Marker({
				map: $scope.map,
				position: new google.maps.LatLng(info.lat, info.lang),
				title: "test"
			}
        );
	    }

    })
	.directive('domMan', function(){
		return{
			restrict: 'A',
			template: 
			'Name: ',
			link: function(scope, element, attr){
				//createMarkers(markersEvent[0]);
			}
		}
	});	
	//data
	var markersEvent = [{
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 62.5421031,
        lang : 19.7477994
	}];
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