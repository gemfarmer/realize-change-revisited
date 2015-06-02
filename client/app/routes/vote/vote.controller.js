'use strict';

angular.module('realizeChangeApp')
  .controller('VoteCtrl', function ($scope, $http, socket) {
    $scope.voted = false;

    $http.get('/api/dreams/random').success(function(dream) {
      $scope.dream = dream;
      console.log('random draem', dream)
      // socket.syncUpdates('dream', $scope.dream);
    });

    $http.get('/api/dreams/randomTwo').success(function(randomDreams) {
      $scope.randomDreams = randomDreams;
      console.log('randomTwo draem', randomDreams)
      // socket.syncUpdates('dream', $scope.dream);
    });

    $scope.voteThisDream = function(dream){
   		var dream = dream;
   		dream.votes ++;
    	$http.put('/api/dreams/' + dream._id, dream);

    	$scope.voted = true;
    }
   
  });
