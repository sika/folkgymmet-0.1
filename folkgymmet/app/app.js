var myApp = angular.module('app', ['ui.router', 'eventJoin.module', 'eventCreate.module', 'header-menu.module',
			'header-login.module', 'event-type-choose.module', 'sidebar-event-list.module', 'search-bar.module', 'google-map.module']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('eventJoin', {
		url : '/',
		controller : 'eventJoinController',
		templateUrl : 'app/components/partials/eventJoin/eventJoin.html'
	}).state('eventCreate', {
		url : '/eventCreate',
		templateUrl : 'app/components/partials/eventCreate/eventCreate.html'
	}).state('discussion', {
		url : '/discussion',
		templateUrl : 'app/components/partials/discussion/discussion.html'
	})
});
myApp.controller('appController', function ($scope) {})
/*factory declaration*/
myApp.factory('appFactory', function () {
	return{
		eventsAll: [{
			id : 1,
			label : "göteborg yeah",
			city : 'Göteborg',
			desc : 'This is the best city in the world!',
			lat : 57.716610,
			lang : 11.973904
		}, {
			id : 2,
			label : "sthlm",
			city : 'Stockholm',
			desc : 'This is Stockholm',
			lat : 59.336574,
			lang : 18.067879
		}, {
			id : 3,
			label : "kirri yeah",
			city : 'Kiruna',
			desc : 'This is Kiruna',
			lat : 67.858475,
			lang : 20.225530
		}],
		visibleMarkers: null,
		setVisibleMarkers: function(arrGoogleMarkers){
			this.visibleMarkers = arrGoogleMarkers;
		}
	}
}); //appFactory END


	/*
	var factoryMap = {};

	factoryMap.mapOptions = {
	//karta över sverige
	center : {
	lat : 62.5421031,
	lng : 19.7477994
	},
	zoom : 5,
	}
	factoryMap.setMapOptions = function(bounds, zoom){ //re-set mapOptions upon searching events (markers)
	this.mapOptions.center.lat = bounds.getCenter().lat();
	this.mapOptions.center.lng = bounds.getCenter().lng();
	this.mapOptions.zoom = zoom;
	}
	factoryMap.hiddenMarkers = null;
	factoryMap.setHiddenMarkers = function (arrGoogleMarkers) {
	this.hiddenMarkers = arrGoogleMarkers;
	}

	return factoryMap;
	 */