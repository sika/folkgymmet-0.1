angular.module('eventJoin.module', [])
//controller start
.controller('eventJoinController', function ($scope) {
    angular.element(document).ready(function () {
        //run when DOM is ready
        initMap();
        for (i = 0; i < $scope.markersEvent.length; i++) {
            initMarkers($scope.markersEvent[i]); //create initial markers
        }

    });
    //Pre-load document.ready
    function initMap() {
        $scope.mapProp = {
            //karta över sverige
            center: {
                lat: 62.5421031,
                lng: 19.7477994
            },
            zoom: 5,
        };
        $scope.map = new google.maps.Map(document.getElementById('googlemap'), $scope.mapProp);
    }
    function initMarkers(info) {
        console.log("initMarkers function");
        new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lang),
            title: "test"
        });
    }
    $scope.markersEvent = [{
        //value: "goteborg",
        label: "göteborg yeah",
        city: 'Göteborg',
        desc: 'This is the best city in the world!',
        lat: 57.716610,
        lang: 11.973904
    }, {
        //value: "stockholm",
        label: "sthlm",
        city: 'Stockholm',
        desc: 'This is Stockholm',
        lat: 59.336574,
        lang: 18.067879
    }, {
        //value: "kiruna",
        label: "kirri yeah",
        city: 'Kiruna',
        desc: 'This is Kiruna',
        lat: 67.858475,
        lang: 20.225530
    }
    ];
})
//END controller
//Directive start
.directive('dSearchBar', function () {
    return {
        restrict: 'A',
        template: '<input id="project" placeholder="t ex sport, plats och/eller tid"></input>',
        link: function (scope, element, attr) {

            ftnAutoComplete();

            function ftnAutoComplete() {
                jQuery("#project").autocomplete({
                    minLength: 0,
                    source: scope.markersEvent,
                    focus: function (event, ui) {
                        jQuery("#project").val(ui.item.label);
                        return false;
                    },
                    select: function (event, ui) {
                        jQuery("#project").val(ui.item.label);
                        return false;
                    }
                })
            .autocomplete("instance")._renderItem = function (ul, item) {
                return jQuery("<li>")
                  .append(item.label)
                  .appendTo(ul);
            };
            }
        }
    }
});
//END Directive
//data
/*
var markersEvent = [{
city : 'Göteborg',
desc : 'This is the best city in the world!',
lat : 57.716610,
lang : 11.973904
}, {
city : 'Stockholm',
desc : 'Shit city',
lat : 59.336574,
lang : 18.067879
}, {
city : 'Kiruna',
desc : 'Shit city',
lat : 67.858475,
lang : 20.225530
}
];
 */
/*
Todo:
- search markers
- Explicit sök (tryck "sök" eller Enter för verkställ) - detta för att undvika lagg om nya res. ständigt visas
- Indicate results: display list of hits in real time in scroll list below search box
- Should be clickable
- only display markers fitting search (or just one of one in suggestion-list is clicked)
- adding markers
- removing markers
- changing markers

*/
