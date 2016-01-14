'use strict';

angular.module('realizeChangeApp')
  .controller('MainCtrl', function ($scope, $http, socket, $window, Auth, Dreams) {
    // $scope.awesomeThings = [];
    $scope.dreaming = {};
    $scope.currentUser = Auth.getCurrentUser();
    $scope.isLoggedIn = Auth.isLoggedIn();

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.addDreams = function() {
      if($scope.dreaming === {}) {
        return;
      }
      var newDream = { 
        future: $scope.dreaming.future, 
        world : $scope.dreaming.world,  
        votes: 0
      };

      Dreams.add(newDream);
      $scope.dreaming = {};
    };
  });
