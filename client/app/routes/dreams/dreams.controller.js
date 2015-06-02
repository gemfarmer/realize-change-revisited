'use strict';

angular.module('realizeChangeApp')
  .controller('DreamsCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';
    
    $http.get('/api/dreams').success(function(dreams) {
      $scope.dreams = dreams;
      socket.syncUpdates('dream', $scope.dreams);
    });

    $scope.deleteDream = function(dream) {
      $http.delete('/api/dreams/' + dream._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dreams');
    });

  });

