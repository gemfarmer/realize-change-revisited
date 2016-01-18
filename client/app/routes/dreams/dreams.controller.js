'use strict';

angular.module('realizeChangeApp')
  .controller('DreamsCtrl', [ '$scope', '$http', 'socket', 'Dreams', 'User', '$window', function ($scope, $http, socket, Dreams, User, $window) {
  	$scope.searchParam = 'world';
    $http.get('/api/dreams').success(function(dreams) {
      $scope.dreams = dreams;
      socket.syncUpdates('dream', $scope.dreams);

      dreams.forEach(function(dream, i){
        $scope.addMarker(dream, i);  
      });
    });

    $scope.deleteDream = function(dream) {
      Dreams.delete(dream);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('dreams');
    });
    $scope.selectParam = function(param){
    	$scope.searchParam = param;
    };

    $scope.resizeMap = {

    }


    $scope.addMarker = function(dream, index) {
      console.log(dream, index)
      var marker = L.marker([+dream.location.latitude, +dream.location.longitude]).addTo($scope.map);

      var markerSettings = {
            "iconUrl": "http://www.wennemar.com/wp-content/uploads/2015/09/bernie-1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -55],
            "className": "dot"
        }
      marker.setIcon(L.icon(markerSettings));

    }
  
  // Provide your access token
  L.mapbox.accessToken = 'pk.eyJ1IjoiZ2VtZmFybWVyIiwiYSI6ImtNWkpLbHcifQ.jWx398eYRGPYROgOcxXjdQ';



  $scope.map = L.mapbox.map('map', 'gemfarmer.4df00baa');


  }]);