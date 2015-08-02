'use strict';

angular.module('realizeChangeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, User, UserInfo) {
    $scope.currentUser = Auth.getCurrentUser();

    $scope.userInfo = UserInfo;
        // console.log('UserInfo', UserInfo)
    $scope.currentUser.profilePicture = $scope.currentUser.facebook ? 'http://graph.facebook/'+$scope.currentUser.facebook.id+'/picture' 
                                                                    : "";
    
    

    $scope.menu = [{
      'title': 'Begin Dreaming',
      'link': '/dreaming',
      'iconName':'cloud'
    },{
      'title': 'Dreams',
      'link': '/dreams',
      'iconName':'globe'
    },{
      'title': 'Vote4Change',
      'link': '/vote',
      'iconName':'thumbs-o-up'
    },{
      'title': 'Results',
      'link': '/results',
      'iconName':'flag-checkered'
    },{
      'title': 'About Us',
      'link': '/about',
      'iconName':'info-circle'
    }];

    console.log(Auth, Auth.isLoggedIn, Auth.isAdmin)
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
