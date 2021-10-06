angular.module("myTemplateApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      redirectTo: "/search",
    })
    .when("/search/", {
      templateUrl: "./home/index.html",
      controller: "HomeController",
      controllerAs: "mainCtrl",
    })
    .when("/search/:word", {
      templateUrl: "./home/index.html",
      controller: "HomeController",
      controllerAs: "mainCtrl",
    });
}
