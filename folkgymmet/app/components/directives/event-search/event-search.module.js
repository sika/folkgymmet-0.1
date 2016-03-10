var mEventSearch = angular.module('event-search.module', []);

mEventSearch.directive('dEventSearch', function () {
	return {
		restrict: 'A',
		templateUrl: 'app/components/directives/event-search/event-search.html'
	};
});