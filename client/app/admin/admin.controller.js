'use strict';

angular.module('demoApp')
  .controller('AdminCtrl', function ($scope, $http, User, Modal) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = Modal.confirm.delete(function(user) {
      User.remove({ id: user._id });
      _.remove($scope.users, user);
    });
  });
