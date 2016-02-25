var mHeaderMenu = angular.module('headerMenu.module', []);
mHeaderMenu.directive('dHeaderMenu', function () {
    return {
        restrict: 'A',
        //scope: true,
        controller: function ($scope) {
            //console.log("ss");
            $scope.username = { name: "yeah" };
        },
        templateUrl: 'app/components/directives/header-menu/header-menu.html'
    }
});
//mHeaderMenu.controller('headerMenuController', function ($scope) {
//    $scope.test = {name: "fff"};
//    console.log('headerMenuController');
//});