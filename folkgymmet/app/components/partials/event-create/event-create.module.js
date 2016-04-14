angular.module('event-create.module', [])
	.controller('eventCreateController', function($scope, appFactory){
		$scope.event = {
			categories: null,
			name: null
		};
		$scope.categories = appFactory.categories;
		$scope.event.categories= $scope.categories;
	});