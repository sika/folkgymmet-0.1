var mHeaderLogin = angular.module('header-login.module', ['ngAnimate']);
mHeaderLogin.directive('dHeaderLogin', function () {
    return {
        restrict: 'A',
        //scope: true,
        controller: function ($scope) {
			$scope.loginDetailsDisplay = false;
        },
        templateUrl: 'app/components/directives/header-login/header-login.html',
		link: function (scope, element, attrs) {
		}
    }
});
