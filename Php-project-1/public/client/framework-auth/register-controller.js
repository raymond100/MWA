angular.module('frameworksApp').controller('RegisterController', RegisterController);

function RegisterController(FrameworksFactory, $window) {
  const vm = this;

  vm.userRegister = function () {
    const user = {
      username: vm.username,
      email: vm.email,
      password: vm.password,
    };
    FrameworksFactory.userRegister(user).then((result) => {
      if (result != 'Internal Server Error') {
        FrameworksFactory.alertMessage('User successfuly registered!');
        $window.location.href = '#!/frameworks';
      } else {
        vm.messageErrorAlert = result;
      }
    });
  };
}
