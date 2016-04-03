angular.module('search-bar.module', [])
.directive('dSearchBar', function () {
	return {
		restrict : 'E',
		templateUrl : 'app/components/directives/search-bar/search-bar.html',
		controller: function ($scope) {
		    $scope.hits = null;
		},
		scope: {
		    markersEvent: "=",
		    sHits: "=hits"
		},
		link: function (scope, element, attr, ctrl) {
			ftnAutoComplete();
			
			function ftnAutoComplete() {
				var counter = 0;
				jQuery("#project").autocomplete({
					minLength : 0,
					source: scope.markersEvent,
					response: function (event, ui) {
					    console.log(ui.content);
					    scope.hits = ui.content.length;
					    scope.$digest(); //updating THIS scopes UI
					},
					focus : function (event, ui) {
						jQuery("#project").val(ui.item.label);
						return false;
					},
					select : function (event, ui) {
					    jQuery("#project").val(ui.item.label);
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
		}
	}
});