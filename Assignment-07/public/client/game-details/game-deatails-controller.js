angular
  .module("meansGameApp")
  .controller("GameDetailController", gameDetailController);

function gameDetailController(GamesFactory, $routeParams, $window) {
  const vm = this;
  const gameId = $routeParams.gameId;
  GamesFactory.getOneGame(gameId).then((data) => {
    vm.details = data;
  });

  vm.deleteGame = function (gameId) {
    GamesFactory.deleteGame(gameId).then((data) => {
      if (!data.status) {
        GamesFactory.alertMessage("Game successfuly deleted!");
        $window.location.href = "#!/games";
      } else {
        vm.messageErrorAlert = "Oupss! An error has occured. Try again";
        console.log(data);
      }
    });
  };
}

// const hideAlert = function (vm) {
//   setTimeout(() => {
//     vm.messageErrorAlert = undefined;
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);
// };
