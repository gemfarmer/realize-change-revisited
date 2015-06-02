'use strict';

angular.module('realizeChangeApp')
  .controller('DreamingCtrl', function ($scope, $http, socket) {
    $scope.message = 'Hello';

    $scope.dreaming = {}


    $scope.addDreams = function() {
      if($scope.dreaming === {}) {
        return;
      }
      var newDream = { 
      	future: $scope.dreaming.future, 
      	world : $scope.dreaming.world,  
      	votes: 0
      }
      $http.post('/api/dreams', newDream);
      $scope.dreaming = {};
    };

  });
