angular
  .module("jobsApp")
  .controller("JobsCreateController", JobsCreateController);

function JobsCreateController(JobsFactory, $window) {
  const vm = this;

  vm.createJob = function () {
    if (vm.formJob.$dirty && vm.formJob.$valid) {
      const newJobs = {
        title: vm.job.title,
        description: vm.job.description,
        experience: vm.job.experience,
        salary: vm.job.salary,
        postDate: vm.job.postDate,
      };
      console.log(newJobs);
      JobsFactory.addNewJob(newJobs).then((data) => {
        if (!data.status) {
          JobsFactory.alertMessage("Jobs successfuly created!");
          $window.location.href = "#!/Jobs";
        } else {
          console.log(data);
          vm.messageErrorAlert = data.data.message;
        }
      });
    }
  };
}
