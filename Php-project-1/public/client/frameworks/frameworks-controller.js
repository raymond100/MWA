angular.module('frameworksApp').controller('FrameworksController', frameworksController);

function frameworksController(FrameworksFactory) {
  const vm = this;
  FrameworksFactory.getAllFrameworks().then((response) => {
    vm.allFrameworks = response;
  });
}
