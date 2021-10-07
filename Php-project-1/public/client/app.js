angular.module('frameworksApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/frameworks',
    })
    .when('/frameworks', {
      templateUrl: 'client/frameworks/frameworks.html',
      controller: 'FrameworksController',
      controllerAs: 'vm',
    })
    .when('/frameworks/:frameworkId', {
      templateUrl: 'client/framework-details/framework-details.html',
      controller: 'FrameworkDetailsController',
      controllerAs: 'vm',
    })
    .otherwise({
      redirectTo: '/',
    });
}
