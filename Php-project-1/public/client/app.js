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
    .when('/frameworks/create', {
      templateUrl: 'client/framework-create/framework-create.html',
      controller: 'FrameworkCreateController',
      controllerAs: 'vm',
    })
    .when('/frameworks/update/:frameworkId', {
      templateUrl: 'client/framework-update/framework-update.html',
      controller: 'FrameworkUpdateController',
      controllerAs: 'vm',
    })
    .when('/frameworks/:frameworkId', {
      templateUrl: 'client/framework-details/framework-details.html',
      controller: 'FrameworkDetailsController',
      controllerAs: 'vm',
    })
    .when('/auth/register', {
      templateUrl: 'client/framework-auth/register.html',
      controller: 'RegisterController',
      controllerAs: 'vm',
    })
    .otherwise({
      redirectTo: '/',
    });
}
