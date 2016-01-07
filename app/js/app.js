'use strict';

var app = angular.module('app', ['ngResource'])
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3})
    });
