'use strict';

app.controller('EventCtrl',
    function EventController($scope, eventData, $log, $anchorScroll) {
        $scope.sortOrder = 'name';

        // eventData.getEvent().then(function success(response) {
        //     $scope.event = response.data;
        // }, function error(response) {
        //     $log.warn('Something went wrong loading events...', response);
        // });
        
        $scope.event = eventData.getEvent();

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        
    });