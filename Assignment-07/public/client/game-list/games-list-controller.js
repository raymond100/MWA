angular.module("meansGameApp").controller("GamesController", gamesController);

function gamesController(GamesFactory) {
  const vm = this;
  GamesFactory.getAllGames().then((response) => {
    vm.allGames = response;
  });
}
