angular
  .module('frameworksApp')
  .controller('FrameworkDetailsController', FrameworkDetailsController);

function FrameworkDetailsController(FrameworksFactory, $routeParams, $window) {
  const vm = this;
  const frameworkId = $routeParams.frameworkId;

  FrameworksFactory.getOneFramework(frameworkId).then((response) => {
    vm.details = response;
  });

  vm.deleteApp = function (appId) {
    FrameworksFactory.deleteApp(appId).then((data) => {
      if (!data.status) {
        FrameworksFactory.alertMessage('App successfuly deleted!');
        $window.location.href = '#!/frameworks';
      } else {
        vm.messageErrorAlert = 'Oupss! An error has occured. Try again';
      }
    });
  };
}
