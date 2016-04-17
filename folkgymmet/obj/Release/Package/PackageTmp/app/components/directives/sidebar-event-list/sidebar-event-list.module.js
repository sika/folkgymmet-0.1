var mSidebarEventList = angular.module('sidebar-event-list.module', []);
mSidebarEventList.directive('dSidebarEventList', function () {
    return {
        restrict: 'A',
        //scope: true,
        controller: function ($scope) {
            //console.log("ss");
            $scope.username = { name: "yeah" };
        },
        templateUrl: 'app/components/directives/sidebar-event-list/sidebar-event-list.html'
    }
});
