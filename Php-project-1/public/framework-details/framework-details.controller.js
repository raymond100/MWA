angular.module('frameworksApp').controller('FrameworkDetailsController', frameworksController);

function frameworksController(FrameworksFactory, $routeParams) {
  const vm = this;
  const frameworkId = $routeParams.frameworkId;
  FrameworksFactory.getOneFramework(frameworkId).then((response) => {
    vm.details = response;
  });
}
