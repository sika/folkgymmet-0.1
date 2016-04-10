var myApp = angular.module('app', ['ui.router', 'eventJoin.module', 'eventCreate.module', 'header-menu.module',
'header-login.module', 'event-type-choose.module', 'sidebar-event-list.module', 'search-bar.module', 'google-map.module']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
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
myApp.controller('appController', function ($scope) {
    console.log("appController:");
    console.log($scope.$id);
    //$scope.markersEvent = appFactory.getInitMarkers(); //get marker objects from app.js factory
})
myApp.factory('googleFactory', function () {
    var factoryMap = {};

    //var eventsAll = appFactory.getEventsAll();
    //factoryMap.get

    var googleMarkers = [];
    var hiddenMarkers = [];
    factoryMap.setGoogleMarker = function (objMarker) {
        //console.log("setGoogleMarkers");
        googleMarkers.push(objMarker);
    }
    factoryMap.getGoogleMarkers = function () {
        return googleMarkers;
    }
    factoryMap.removeMarkers = function () {
        googleMarkers = [];
    }
    factoryMap.getHiddenMarkers = function () {
        return hiddenMarkers;
    }
    factoryMap.setHiddenMarker = function (arrGoogleMarkers) {
        /*
        for (i = 0; i < googleMarkers.length; i++) {
            if (googleMarkers[i].id == googleMarkerId)
                googleMarkers[i].setVisible(false);
        }
        */
        hiddenMarkers = arrGoogleMarkers;
        //objGoogleMarker.setVisible(true);
    }
    var mapOptions = {
        //karta över sverige
        center: {
            lat: 62.5421031,
            lng: 19.7477994
        },
        zoom: 5,
    };
    factoryMap.getOptions = function () {
        return mapOptions;
    }

    return factoryMap;
    /*
    factoryMap.setMarker = function (objCurrentMarkers) {
        googleMarkers = objCurrentMarkers;
    }

    factoryMap.getMarkers = function () {
        return googleMarkers;
    }

    
    factoryMap.resetMarkers = function (){
        var resetMarkers = appFactory.getEventsAll(); //put in all events as markers
        return resetMarkers;
    }

     
    factoryMap.setOptions = function (objMapOptions) {
        //return mapOptions;
    }
    
    */
    

})
/*factory declaration*/
myApp.factory('appFactory', function () {
    /*empty object declaration*/
    var factory = {};
    var eventsAll = [{
        id: 1,
        label: "göteborg yeah",
        city: 'Göteborg',
        desc: 'This is the best city in the world!',
        lat: 57.716610,
        lang: 11.973904
    }, {
        id: 2,
        label: "sthlm",
        city: 'Stockholm',
        desc: 'This is Stockholm',
        lat: 59.336574,
        lang: 18.067879
    }, {
        id: 3,
        label: "kirri yeah",
        city: 'Kiruna',
        desc: 'This is Kiruna',
        lat: 67.858475,
        lang: 20.225530
    }];

    var visibleMarkers = eventsAll; //initate visible markers will all markers/events

    
    factory.getEventsAll = function () {
        //console.log(markersEvent);
        return eventsAll;
    };
       
    factory.getVisibleMarkers = function () {
        return visibleMarkers;
    }
    factory.setVisibleMarkers = function (arrMarker) {
        visibleMarkers = arrMarker;
    }
    
    return factory;
    
}); //appFactory END