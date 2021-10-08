angular.module("meansGameApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider.when("/", {
    redirectTo: "/games",
  });
  $routeProvider
    .when("/games", {
      templateUrl: "client/game-list/games.html",
      controller: "GamesController",
      controllerAs: "vm",
    })
    .when("/games/create", {
      templateUrl: "client/game-create/game-create.html",
      controller: "GameCreateController",
      controllerAs: "vm",
    })
    .when("/games/:gameId", {
      templateUrl: "client/game-details/game-details.html",
      controller: "GameDetailController",
      controllerAs: "vm",
    })
    .otherwise({
      redirectTo: "/",
    });
}
