'use strict';

app.controller('EventCtrl',
    function EventController($scope, eventData, $log, $anchorScroll, $routeParams) {
        $scope.sortOrder = 'name';

        // eventData.getEvent().then(function success(response) {
        //     $scope.event = response.data;
        // }, function error(response) {
        //     $log.warn('Something went wrong loading events...', response);
        // });
        
        $scope.event = eventData.getEvent($routeParams.eventId);

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        
    });