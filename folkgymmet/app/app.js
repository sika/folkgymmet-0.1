var myApp = angular.module('app', ['ui.router', 'eventJoin.module', 'eventCreate.module', 'header-menu.module', 
'header-login.module', 'event-type-choose.module', 'sidebar-event-list.module', 'search-bar.module']);
/*	myApp.controller('appController', function() {

	});
*/	
	myApp.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('eventJoin', {
			url: '/',
			controller: 'eventJoinController',
			templateUrl: 'app/components/partials/eventJoin/eventJoin.html'
		}).state('eventCreate', {
		    url: '/eventCreate',
		    templateUrl: 'app/components/partials/eventCreate/eventCreate.html'
		}).state('discussion', {
			url: '/discussion',
			templateUrl: 'app/components/partials/discussion/discussion.html'
		})
	});
	
	/*factory declaration*/
myApp.factory('appFactory', function(){
    /*empty object declaration*/
    var factory = {};
	
	  var markersEvent = [{
        label: "göteborg yeah",
		city: 'Göteborg',
        desc: 'This is the best city in the world!',
        lat: 57.716610,
        lang: 11.973904
    }, {
        label: "sthlm",
        city: 'Stockholm',
        desc: 'This is Stockholm',
        lat: 59.336574,
        lang: 18.067879
    }, {
        label: "kirri yeah",
        city: 'Kiruna',
        desc: 'This is Kiruna',
        lat: 67.858475,
        lang: 20.225530
    }
    ];
console.log(markersEvent);
   factory.getInitMarkers = function () {
	   console.log(markersEvent);
        return markersEvent;
    };

	/*
    factory.getVideos = function () {
        return videos;
    };
*/

    return factory;
});