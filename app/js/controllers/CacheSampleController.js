'use strinct';

app.controller('CacheSampleController', function CacheSampleController($scope, myCache){ 
   $scope.addToCache = function(key, value) {
       console.log('man');
       myCache.put(key, value);
   }
    
   $scope.readFromCache = function(key) {
       return myCache.get(key);
   }
    
   $scope.getCacheState = function() {
       return myCache.info();
   } 
});