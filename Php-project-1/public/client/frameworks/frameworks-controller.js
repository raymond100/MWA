angular.module('frameworksApp').controller('FrameworksController', frameworksController);

function frameworksController(FrameworksFactory) {
  const vm = this;
  const message = FrameworksFactory.getMessage();
  FrameworksFactory.getAllFrameworks().then((response) => {
    vm.allFrameworks = response;
  });

  if (message != '') {
    vm.successMessage = message;
    FrameworksFactory.resetAlert();
  }
}
