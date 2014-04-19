angular.module('main', [
  'ui.router'
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
    .state('resume', {  
      url: '/resume',
      templateUrl: 'partials/resume.html',
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
//
;