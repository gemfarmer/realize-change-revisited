'use strict';

angular.module('realizeChangeApp')
  .controller('DreamsCtrl', [ '$scope', '$http', 'socket', 'Dreams', 'User', '$window', function ($scope, $http, socket, Dreams, User, $window) {
  	$scope.searchParam = 'world';
    $scope.dreamFeedIsOpen = true;

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
    // debugger
    $scope.resizeMap = function () {
      var newHeight = $window.innerHeight - 50
      $('.map').height(newHeight)
    }

    $scope.dreamFeed = function(status) {
      if (status === 'open') {
        $scope.dreamFeedIsOpen = true;
      } else {
        $scope.dreamFeedIsOpen = false;
      }
      
    }

    $scope.addMarker = function(dream, index) {
      var coords = [+dream.location.latitude, +dream.location.longitude],
        options = {
          title: dream.future,
          clickable: true,
        },
        markerSettings = {
            // "iconUrl": "assets/images/Star7.png",
            // "iconUrl": "assets/images/star5.png", // good contrast against white
            "iconUrl": "assets/images/Star8.png",
            "iconSize": [30, 30],
            "iconAnchor": [15, 15],
            "popupAnchor": [0, -55],
            "className": "dot"
        },
        markerOpacity = .5;

      var marker = L.marker(coords, options).addTo($scope.map)
        .bindPopup(dream.future)
        .setIcon(L.icon(markerSettings))
        .setOpacity(markerOpacity);
        
      // marker.on('click', function(e) {
      //   // e.target.openPopup()
      // });

      // marker._leaflet_id;

    }
  
  // Provide your access token
  L.mapbox.accessToken = 'pk.eyJ1IjoiZ2VtZmFybWVyIiwiYSI6ImtNWkpLbHcifQ.jWx398eYRGPYROgOcxXjdQ';

   // initialize map
  $scope.map = L.mapbox.map('map', 'gemfarmer.4df00baa', {
    center: [ 33.7891, 44.9225 ], // starting position
    zoom: 2 // starting zoom
  });
  $scope.resizeMap();


  angular.element($window).bind('resize', function(){
     $scope.resizeMap();
   });


  }]);