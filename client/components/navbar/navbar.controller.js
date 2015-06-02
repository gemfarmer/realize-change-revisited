'use strict';

angular.module('realizeChangeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Begin Dreaming',
      'link': '/dreaming'
    },{
      'title': 'Dreams',
      'link': '/dreams'
    },{
      'title': 'Vote4Change',
      'link': '/vote'
    },{
      'title': 'Results',
      'link': '/results'
    },{
      'title': 'About Us',
      'link': '/about'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });