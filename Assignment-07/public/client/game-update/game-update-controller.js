angular
  .module("meansGameApp")
  .controller("GameUpdateController", GameUpdateController);

function GameUpdateController(GamesFactory, $routeParams, $window) {
  const vm = this;
  const gameId = $routeParams.gameId;
  GamesFactory.getOneGame(gameId).then((data) => {
    vm.game = data;
  });

  vm.updateGame = function () {
    if (vm.formGame.$dirty && vm.formGame.$valid) {
      GamesFactory.updateGame(gameId, vm.game).then((data) => {
        if (!data.status) {
          GamesFactory.alertMessage("Game successfuly updated!");
          $window.location.href = "#!/games";
        } else {
          vm.messageErrorAlert = data.data.message;
        }
      });
    } else {
      alert("There were no changes made.");
    }
  };
}
