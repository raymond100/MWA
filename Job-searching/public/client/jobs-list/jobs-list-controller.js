angular.module("jobsApp").controller("JobsController", JobsController);

function JobsController(JobsFactory) {
  const vm = this;
  JobsFactory.getAllJobs().then((response) => {
    vm.allJobs = response;
  });

  const message = JobsFactory.getMessage();

  if (message != "") {
    vm.successMessage = message;
    JobsFactory.resetAlert();
  }
}
