'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: '/template/NewEvent.html',
            controller: 'EditEventController'
        });

        $routeProvider.when('/events', {
            templateUrl: '/template/EventList.html',
            controller: 'EventListController'
        });

        $routeProvider.when('/events/:eventId', {
            templateUrl: '/template/EventDetails.html',
            controller: 'EventCtrl'
        });

        $routeProvider.when('/editProfile', {
            templateUrl: '/template/EditProfile.html',
            controller: 'EditProfileController'
        });

        $routeProvider.when('/maNigga', {
            template: '<h1>Ma Nigga</h1>'
        });

        $routeProvider.otherwise('/events');
        $locationProvider.html5Mode(true);
    });
