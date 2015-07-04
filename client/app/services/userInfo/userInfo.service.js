'use strict';

angular.module('realizeChangeApp')
  .service('UserInfo', function (User, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentUser = Auth.getCurrentUser();
    var UserInfo = function(){
    	if (currentUser.provider === 'local'){
	    	this.name = currentUser.name;
	    	this.first_name = currentUser.name;
	    } else if(currentUser.provider === 'facebook'){
	    	this.name = currentUser.facebook.name;
	    	this.first_name = currentUser.facebook.first_name;
	    	this.profile_img = 'https://graph.facebook.com/'+currentUser.facebook.id+"/picture";
	    } else if(currentUser.provider === 'google'){
	    	this.name = currentUser.facebook.name;
	    	this.first_name = currentUser.google.name;
	    	this.profile_img = currentUser.google.image.url;
	    } 
    }
    
    return new UserInfo();

    
  });
