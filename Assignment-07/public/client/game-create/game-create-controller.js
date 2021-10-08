angular
  .module("meansGameApp")
  .controller("GameCreateController", GameCreateController);

function GameCreateController(GamesFactory, $window) {
  const vm = this;

  vm.createGame = function () {
    if (vm.formGame.$dirty && vm.formGame.$valid) {
      const newGame = {
        title: vm.game.title,
        price: vm.game.price,
        rate: vm.game.rate,
      };
      GamesFactory.addNewGame(newGame).then((data) => {
        if (!data.status) {
          GamesFactory.alertMessage("Game successfuly created!");
          $window.location.href = "#!/games";
        } else {
          vm.messageErrorAlert = data.data.errors.title.message;
        }
      });
    }
  };
}
