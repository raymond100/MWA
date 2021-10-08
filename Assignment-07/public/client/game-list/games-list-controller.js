angular.module("meansGameApp").controller("GamesController", gamesController);

function gamesController(GamesFactory, $window) {
  const vm = this;
  GamesFactory.getAllGames().then((response) => {
    vm.allGames = response;
  });

  const message = GamesFactory.getMessage();

  if (message != "") {
    vm.successMessage = message;
    GamesFactory.resetAlert();
  }
}
