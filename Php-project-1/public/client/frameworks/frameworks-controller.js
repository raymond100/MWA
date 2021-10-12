angular.module('frameworksApp').controller('FrameworksController', FrameworksController);

function FrameworksController(FrameworksFactory) {
  const vm = this;
  const message = FrameworksFactory.getMessage();
  // TODO: Get count in the DB.
  const appFiltered = 100;
  // TODO: Generate number page auto
  const perPage = 10;
  vm.currentPage = 0;

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
    if (vm.currentPage > 0) {
      vm.currentPage = parseInt(val) - 1;
      offset = perPage * vm.currentPage;
      callApps(FrameworksFactory, vm, offset, perPage);
    }
  };

  if (message != '') {
    vm.successMessage = message;
    FrameworksFactory.resetAlert();
  }
}

const callApps = function (factory, ctx, offset, perPage) {
  factory.getAllFrameworks(offset, perPage).then((response) => {
    ctx.allFrameworks = response;
  });
};
