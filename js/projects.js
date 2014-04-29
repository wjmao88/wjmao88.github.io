angular.module('projects', ['main'])
.controller('ProjectController', [
  '$scope', 
  'contentService',
function($scope, contentService){
  $scope.projects = contentService.projects;
}])