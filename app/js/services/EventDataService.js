'use strict';

app.factory('eventData', function eventDataService($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function () {
            // return $http.get('/data/event/1');
            return resource.get({id:1});
        },
        
        saveEvent: function(event) {
            event.id = 12345678;
            return resource.save(event);
        }
    }
});