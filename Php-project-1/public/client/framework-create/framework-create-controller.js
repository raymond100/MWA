angular.module('frameworksApp').controller('FrameworkCreateController', FrameworkCreateController);

function FrameworkCreateController(FrameworksFactory, $window) {
  const vm = this;

  vm.createApp = function () {
    // TODO: Split string by semi-colon
    // TODO: Input check
    if (vm.formApp.$dirty && vm.formApp.$valid) {
      const newFramework = {
        app_name: vm.app.name,
        app_description: vm.app.description,
        authors: vm.app.authors,
        developpers: vm.app.developpers,
        initial_release: vm.app.initial_release,
        stable_release: vm.app.stable_release,
        version: vm.app.version,
        repository: vm.app.repository,
        languages: vm.app.languages,
        Os: vm.app.os,
        type: vm.app.type,
        licence: vm.app.licence,
        website: vm.app.website,
      };

      FrameworksFactory.addNewApp(newFramework).then((data) => {
        if (!data.status) {
          FrameworksFactory.alertMessage('App successfuly created!');
          $window.location.href = '#!/frameworks';
        } else {
          vm.messageErrorAlert = data.data.message;
        }
      });
    }
  };
}
