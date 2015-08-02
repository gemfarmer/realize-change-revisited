'use strict';

angular.module('realizeChangeApp')
  .directive('backImage', function ($window) {
    return function(scope, element, attrs){
        var url = attrs.backImage;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
        if (attrs.backSize === 'full'){
        	// console.log($window)
        	element.css({
        		'height' :$window.innerHeight
        	
        	});
        }
        
    };
  });