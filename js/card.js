angular.module('card', [])
.directive('card', function(){
  return { 
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'partials/card.html',
    scope: {
      item: '='
    },
    controller: ['$scope', function($scope){
      
    }]
  };
})