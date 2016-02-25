var myApp = angular.module('app', ['ui.router','eventJoin.module', 'eventCreate.module', 'headerMenu.module']);
	myApp.controller('appController', function() {
		var appCont = this;
		appCont.shit = "hhh";
	});
	
	myApp.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('eventJoin', {
			url: '/',
			controller: 'eventJoinController',
			templateUrl: 'app/components/partials/eventJoin/eventJoin.html'
		}).state('eventCreate', {
		    url: '/eventCreate',
		    templateUrl: 'app/components/partials/eventCreate/eventCreate.html'
		})
	});