angular
  .module("meansGameApp")
  .controller("RegisterController", RegisterController);

function RegisterController(GamesFactory, $window) {
  const vm = this;

  vm.userRegister = function () {
    const user = {
      username: vm.username,
      email: vm.email,
      password: vm.password,
    };

    if (vm.formRegister.$dirty && vm.formRegister.$valid) {
      if (vm.repass != vm.password) {
        vm.messageErrorAlert = "Password not match.";
      } else {
        GamesFactory.userRegister(user).then((result) => {
          if (result != "Internal Server Error") {
            GamesFactory.alertMessage("User successfuly registered!");
            $window.location.href = "#!/games";
          } else {
            vm.messageErrorAlert = result;
          }
        });
      }
    } else {
      vm.messageErrorAlert = "All fields are required.";
    }
  };
}
