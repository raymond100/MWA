angular
  .module("jobsApp")
  .controller("JobsUpdateController", JobsUpdateController);

function JobsUpdateController(JobsFactory, $routeParams, $window) {
  const vm = this;

  const jobId = $routeParams.jobId;
  JobsFactory.getOneJob(jobId).then((data) => {
    vm.job = {
      title: data.title,
      description: data.description,
      experience: data.experience,
      salary: parseFloat(data.salary),
      postDate: new Date(data.postDate),
    };
  });

  vm.updateJob = function () {
    console.log("merde");
    if (vm.formJob.$dirty && vm.formJob.$valid) {
      JobsFactory.updateJob(jobId, vm.job).then((data) => {
        if (!data.status) {
          JobsFactory.alertMessage("Jobs successfuly updated!");
          $window.location.href = "#!/Jobs";
        } else {
          console.log(data);
          vm.messageErrorAlert = data.data.message;
        }
      });
    } else {
      alert("There were no changes made.");
    }
  };
}
