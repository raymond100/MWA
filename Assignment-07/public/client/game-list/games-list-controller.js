angular.module("meansGameApp").controller("GamesController", gamesController);

function gamesController(GamesFactory, $window) {
  const vm = this;
  const message = GamesFactory.getMessage();
  // TODO: Get count in the DB.
  const appFiltered = 100;
  // TODO: Generate number page auto
  const perPage = 10;
  vm.currentPage = 1;
  vm.searchApp = "";

  let offset = perPage * vm.currentPage;

  callGames(GamesFactory, vm, offset, perPage);

  vm.setCurrentPage = function (val) {
    vm.currentPage = val;
    offset = perPage * vm.currentPage;
    callGames(GamesFactory, vm, offset, perPage);
  };

  vm.nextPage = function (val) {
    if (offset < appFiltered) {
      vm.currentPage = parseInt(val) + 1;
      offset = perPage * vm.currentPage;
      callGames(GamesFactory, vm, offset, perPage);
    }
  };

  vm.previousPage = function (val) {
    if (vm.currentPage > 1) {
      vm.currentPage = parseInt(val) - 1;
      offset = perPage * vm.currentPage;
      callGames(GamesFactory, vm, offset, perPage);
    }
  };

  // Search
  vm.change = function () {
    offset = 0;
    callGames(GamesFactory, vm, offset, perPage);
  };

  // Reset alert
  if (message != "") {
    vm.successMessage = message;
    GamesFactory.resetAlert();
  }
}

const callGames = function (factory, ctx, offset, perPage) {
  factory.getAllGames(offset, perPage, ctx.searchGame).then((response) => {
    ctx.allGames = response;
  });
};
