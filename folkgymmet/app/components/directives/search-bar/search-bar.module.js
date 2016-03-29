angular.module('search-bar.module', [])
.directive('dSearchBar', function () {
	return {
		restrict : 'A',
		template : '<input id="project" placeholder="sport, plats och/eller tid"></input>',
		controller: 'eventJoinController',
		scope: {},
		link : function (scope, element, attr, ctrl) {

			ftnAutoComplete();
			function ftnAutoComplete() {
				var counter = 0;
				jQuery("#project").autocomplete({
					minLength : 0,
					source : scope.markersEvent,
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