angular
  .module("meansGameApp")
  .controller("GameDetailController", gameDetailController);

function gameDetailController(GamesFactory, $routeParams) {
  const vm = this;
  const gameId = $routeParams.gameId;
  GamesFactory.getOneGame(gameId).then((data) => {
    vm.details = data;
  });
}
