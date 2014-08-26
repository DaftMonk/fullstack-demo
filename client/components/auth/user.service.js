'use strict';

angular.module('demoApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      setPassword: {
        method: 'POST',
        params: {
          controller: 'password'
        }
      },
      changeEmail: {
        method: 'PUT',
        params: {
          controller: 'email'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      confirm: {
        method: 'POST',
        params: {
          controller: 'confirm'
        }
      }
	  });
  });
