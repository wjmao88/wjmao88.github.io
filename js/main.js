angular.module('main', [
  'ui.router',
  'projects',
  'profile'
]).config([
  '$stateProvider', 
  '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider) {
  console.log('routing');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'partials/projects.html'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'partials/blog.html',
    })
}])
.service('contentService', [function(){
  this.skills = window.myData.skills
  this.projects = window.myData.projects
  this.educations = window.myData.educations
}])
//
;