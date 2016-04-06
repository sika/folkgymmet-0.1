angular.module('search-bar.module', [])
.factory('searchFactory', function () {
	return {
		filteredMarkers: [{}],
        setFilteredMarkers: function(arrMarkers) {
			this.filteredMarkers = arrMarkers; //set new array for markers to filter (see google-map watch)
			//console.log(this);
        }		
	}
})
.controller('search-bar.controller', function ($scope, appFactory, searchFactory){
			$scope.api = searchFactory;
			$scope.markersEvent = appFactory.getInitMarkers();
		    $scope.hits = null;
})
.directive('dSearchBar', ['searchFactory', function(searchFactory) {
	return {
		restrict : 'E',
		templateUrl : 'app/components/directives/search-bar/search-bar.html',
		controller: "search-bar.controller",
		link: function (scope, element, attr) {
			ftnAutoComplete();
			
			function ftnAutoComplete() {
				var counter = 0;
				jQuery("#project").autocomplete({
					minLength : 0,
					source: scope.markersEvent,
					response: function (event, ui) {
					    scope.hits = ui.content.length;
						//setFilteredMarkers(ui.content);
					    scope.$digest(); //updating THIS scopes UI
					},
					focus : function (event, ui) {
						jQuery("#project").val(ui.item.label);
						return false;
					},
					select : function (event, ui) {
					    jQuery("#project").val(ui.item.label);
						setFilteredMarkers([ui.item]); //pass object as array
					    scope.hits = 1;
					    scope.$digest();
						return false;
					}
				})
				.autocomplete("instance")._renderItem = function (ul, item) {
				    counter++;
					if (counter % 2 == 0) {
						return jQuery("<li>")
						.append(item.label + '<br>' +item.desc).css('background-color', 'lightgray')
						.appendTo(ul);
					}else{
						return jQuery("<li>")
						.append(item.label + '<br>' +item.desc)						
						.appendTo(ul);						
					}
				};				
			}
			function setFilteredMarkers(arrMarkers){
				searchFactory.setFilteredMarkers(arrMarkers); //pass array to searchFactory
			}
		}
	}
}]);