'use strict';

angular.module('realizeChangeApp')
  .controller('DreamsCtrl', [ '$scope', '$http', 'socket', 'Dreams', 'User', function ($scope, $http, socket, Dreams, User) {
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

    $scope.addMarker = function(dream, index) {
      console.log(dream, index)
      $scope.markers['m'+index] = {
        lat: +dream.location.latitude,
        lng: +dream.location.longitude,
        message: dream.future
      }
    }
  
    angular.extend($scope, {
      eeuu: {
        lat: 39,
        lng: -99,
        zoom: 4
      },
      layers: {
        baselayers: {
          xyz: {
              name: 'OpenStreetMap (XYZ)',
              url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              type: 'xyz'
          }
        },
        overlays: {
          wms: {
            name: 'EEUU States (WMS)',
            type: 'wms',
            visible: true,
            url: 'http://suite.opengeo.org/geoserver/usa/wms',
            layerParams: {
              layers: 'usa:states',
              format: 'image/png',
              transparent: true
            }
          }
        }
      },
      markers: {
          // m1: {
          //     lat: 43,
          //     lng: -90.13,
          //     message: "I'm a static marker"
          // },
      },
      defaults: {
          scrollWheelZoom: false
      }
    });
  }]);