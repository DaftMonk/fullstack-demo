'use strict';

angular.module('fullstackDemoApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
