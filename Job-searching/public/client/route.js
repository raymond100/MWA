angular.module("jobsApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider.when("/", {
    redirectTo: "/jobs",
  });
  $routeProvider
    .when("/jobs", {
      templateUrl: "client/jobs-list/jobs-list.html",
      controller: "JobsController",
      controllerAs: "vm",
    })
    .when("/jobs/create", {
      templateUrl: "client/jobs-create/jobs-create.html",
      controller: "JobsCreateController",
      controllerAs: "vm",
    })
    .when("/jobs/update/:jobId", {
      templateUrl: "client/jobs-update/jobs-update.html",
      controller: "JobsUpdateController",
      controllerAs: "vm",
    })
    .when("/jobs/:jobsId", {
      templateUrl: "client/jobs-details/jobs-details.html",
      controller: "JobsDetailController",
      controllerAs: "vm",
    })
    .otherwise({
      redirectTo: "/",
    });
}
