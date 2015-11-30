'use strict';

angular.module('realizeChangeApp')
  .directive('backImage', function ($window) {
    return function(scope, element, attrs){
	var url = "assets/images/spacebg23.jpg"
        // var url = attrs.backImage;
     
        element.css({
            'background-size' : 'cover',
            'overflow':'hidden'
        });
        if (url == 'blank'){
            element.css({
                'background-color': 'white'
            });
        } else{
            element.css({
                'background-image': 'url(' + url +')'
            });
        }
        if (attrs.backSize === 'full'){
        	// console.log($window)
        	element.css({
        		'height' :$window.innerHeight
        	
        	});
        }

        var w = angular.element($window);
        scope.$watch(function () {
            return {
                'h': w.height()
            };
        }, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            element.css({
                'height': newValue.h
            });

        }, true);

        w.bind('backImage', function () {
            scope.$apply();
        });
        
    };
  });
