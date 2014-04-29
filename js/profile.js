angular.module('profile', ['main'])
.controller('ProfileController', [
  '$scope', 
  'contentService',
function($scope, contentService){
  $scope.skills = contentService.skills;
}])