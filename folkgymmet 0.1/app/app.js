var myApp = angular.module('app', ['ui.router','home.module']);
	myApp.controller('appController', function() {
		
		var appCont = this;
		appCont.shit = "hhh";
		/* $scope.shit = "hhh";
		console.log($scope.shit);
		console.log("app.js");
		 *///$scope.double = function(value) { return value * 2; };
	});
	
	myApp.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('/home', {
			url: '/home',
			//controller: 'appController',
			templateUrl: 'app/components/partials/home/home.html'
		})
	});