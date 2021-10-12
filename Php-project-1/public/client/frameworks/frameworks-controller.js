angular.module('frameworksApp').controller('FrameworksController', FrameworksController);

function FrameworksController(FrameworksFactory) {
  const vm = this;
  const message = FrameworksFactory.getMessage();
  // TODO: Get count in the DB.
  const appFiltered = 100;
  // TODO: Generate number page auto
  const perPage = 10;
  vm.currentPage = 1;
  vm.searchApp = '';

  let offset = perPage * vm.currentPage;

  callApps(FrameworksFactory, vm, offset, perPage);

  vm.setCurrentPage = function (val) {
    vm.currentPage = val;
    offset = perPage * vm.currentPage;
    callApps(FrameworksFactory, vm, offset, perPage);
  };

  vm.nextPage = function (val) {
    if (offset < appFiltered) {
      vm.currentPage = parseInt(val) + 1;
      offset = perPage * vm.currentPage;
      callApps(FrameworksFactory, vm, offset, perPage);
    }
  };

  vm.previousPage = function (val) {
    if (vm.currentPage > 1) {
      vm.currentPage = parseInt(val) - 1;
      offset = perPage * vm.currentPage;
      callApps(FrameworksFactory, vm, offset, perPage);
    }
  };

  // Search
  vm.change = function () {
    offset = 0;
    callApps(FrameworksFactory, vm, offset, perPage);
  };

  // Reset alert
  if (message != '') {
    vm.successMessage = message;
    FrameworksFactory.resetAlert();
  }
}

const callApps = function (factory, ctx, offset, perPage) {
  factory.getAllFrameworks(offset, perPage, ctx.searchApp).then((response) => {
    ctx.allFrameworks = response;
  });
};
