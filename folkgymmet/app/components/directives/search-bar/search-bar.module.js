angular.module('search-bar.module', [])
.directive('dSearchBar', function () {
	return {
		restrict : 'E',
		templateUrl : 'app/components/directives/search-bar/search-bar.html',
		//controller: 'eventJoinController',
		scope: {
			markersEvent: "=markersEvent"
		},
		link : function (scope, element, attr, ctrl) {
			console.log(scope.markersEvent);
			ftnAutoComplete();
			
			function ftnAutoComplete() {
				var counter = 0;
				jQuery("#project").autocomplete({
					minLength : 0,
					source : scope.markersEvent,//getSource(), //scope.markersEvent;
					focus : function (event, ui) {
						jQuery("#project").val(ui.item.label);
						return false;
					},
					select : function (event, ui) {
						jQuery("#project").val(ui.item.label);
						return false;
					}
				})
				.autocomplete("instance")._renderItem = function (ul, item) {
					counter++;
					if (counter % 2 == 0) {
						//console.log(counter);
						return jQuery("<li>")
						.append(item.label + '<br>' +item.desc).css('background-color', 'lightgray')
						.appendTo(ul);
					}else{
						//console.log(counter);
						return jQuery("<li>")
						.append(item.label + '<br>' +item.desc)						
						.appendTo(ul);						
					}
					
				};
			}
		}
	}
});