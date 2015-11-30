'use strict';

angular.module('realizeChangeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, User, UserInfo, $modal,$rootScope) {
    $scope.currentUser = Auth.getCurrentUser();

    $scope.userInfo = UserInfo;
        // console.log('UserInfo', UserInfo)
    $scope.currentUser.profilePicture = $scope.currentUser.facebook ? 'http://graph.facebook/'+$scope.currentUser.facebook.id+'/picture' 
                                                                    : "";
    
    

    $scope.menu = [{
      'title': 'Begin Dreaming',
      'link': '/dreaming',
      'iconName':''
    },{
      'title': 'Dreams',
      'link': '/dreams',
      'iconName':''
    },{
      'title': 'Vote4Goals',
      'link': '/vote',
      'iconName':''
    },{
      'title': 'Shared Goals',
      'link': '/results',
      'iconName':''
    },
    {
      'title': 'Resources',
      'link': '/resources',
      'iconName':''
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
    $rootScope.isCollapsed = true;
    $scope.openMenu = function(){
      if (!$rootScope.isCollapsed){
        $location.path('/');
      }
      $rootScope.isCollapsed = !$rootScope.isCollapsed;
    }


  });
