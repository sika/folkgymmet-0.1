var mHeaderLogin = angular.module('headerLogin.module', []);
mHeaderLogin.directive('dHeaderLogin', function () {
    return {
        restrict: 'A',
        //scope: true,
        controller: function ($scope) {
            //console.log("ss");
            $scope.username = { name: "yeah" };
        },
        templateUrl: 'app/components/directives/header-login/header-login.html'
    }
});
//mHeaderMenu.controller('headerMenuController', function ($scope) {
//    $scope.test = {name: "fff"};
//    console.log('headerMenuController');
//});