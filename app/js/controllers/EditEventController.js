'use strict';

app.controller('EditEventController',
    function EditEventController($scope, eventData) {
        
        $scope.saveEvent = function (event, eventForm) {
            if(eventForm.$valid) {
                eventData.saveEvent(event).$promise.then(
                    function(response) { console.log('whoop'); },
                    function(response) { console.log('NO! somethig wen\'t wrong'); }
                );
            } else {
                console.log('form not sValid form :()');
            }
        };

        $scope.cancelEdit = function () {
            window.location = '/EventDetails.html';
        }
    });