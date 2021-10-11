angular.module('frameworksApp').controller('FrameworkCreateController', FrameworkCreateController);

function FrameworkCreateController(FrameworkFactory, $window) {
  const vm = this;

  vm.createJob = function () {
    if (vm.formJob.$dirty && vm.formJob.$valid) {
      const newFramework = {
        title: vm.job.title,
        description: vm.job.description,
        experience: vm.job.experience,
        salary: vm.job.salary,
        postDate: vm.job.postDate,
      };
      console.log(newFramework);
      FrameworksFactory.addNewApp(newFramework).then((data) => {
        if (!data.status) {
          FrameworkFactory.alertMessage('App successfuly created!');
          $window.location.href = '#!/frameworks';
        } else {
          console.log(data);
          vm.messageErrorAlert = data.data.message;
        }
      });
    }
  };
}
