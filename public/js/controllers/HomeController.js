wayblazer
    .controller('HomeController', ['$scope', 'FilterTXT', function ($scope, FilterTXT) {
        
        'use strict';
        
        $scope.activities = [
            {
                title: 'Parkour',
                image: 'parkour.gif',
                content: 'Run like a traceur in the Urban landscape in France!',
                location: '15th Arrondisement, Paris, France',
                type: 'parkour'
            },
            {
                title: 'Wingsuit Gliding',
                image: 'wing2.gif',
                content: "Sail through the Alps in a wingsuit like a flying squirrel!",
                location: 'Swiss Alps, Chur, Switzerland',
                type: 'wingsuit'
            },
            {
                title: 'Snowboarding',
                image: 'snowboard.gif',
                content: 'Or you could learn how shred like the guy above in the Colorado!',
                location: 'Aspen, Colorado, USA',
                type: 'snowboarding'
            },
            {
                title: 'Surfing',
                image: 'surfing.gif',
                content: "But you could just shred some waves in Cape Town! Just don't get eaten by the sharks! ",
                location: 'Cape Town, South Africa',
                type: 'surfing'
            }
        ];
        
        $scope.dataCategory = '';
        
        $scope.select = function (setModel) {
            $scope.dataCategory = setModel.toString;
        };
        
        $scope.$watch('dataCategory', function (newValue, oldValue) {
            
            if (newValue !== oldValue) {
                FilterTXT.setDataCategory(newValue);
            }
        });

    }])

    .config(function ($routeProvider) {

        "use strict";

        $routeProvider
            .when('/', {
                templateUrl : 'templates/home.html'
            }
                );
    });