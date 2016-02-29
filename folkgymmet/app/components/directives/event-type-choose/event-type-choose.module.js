var mEventTypeChoose = angular.module('event-type-choose.module', []);

mEventTypeChoose.directive('dEventTypeChoose', function () {
	return {
		restrict: 'A',
		templateUrl: 'app/components/directives/event-type-choose/event-type-choose.html'
	};
});