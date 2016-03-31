﻿angular.module('search-bar.module', [])
.directive('dSearchBar', function () {
	return {
		restrict : 'E',
		template : '<input id="project" class="search-bar" placeholder="sport, plats och/eller tid"></input><img class="search-bar-icon" src="externals/img/ic_search_black_36px.svg" alt="Sök">',
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