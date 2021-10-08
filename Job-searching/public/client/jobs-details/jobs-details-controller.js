angular
  .module("jobsApp")
  .controller("JobsDetailController", JobsDetailController);

function JobsDetailController(JobsFactory, $routeParams, $window) {
  const vm = this;
  const jobsId = $routeParams.jobsId;
  JobsFactory.getOneJob(jobsId).then((data) => {
    vm.details = data;
  });

  vm.deleteJob = function (jobId) {
    JobsFactory.deleteJob(jobId).then((data) => {
      if (!data.status) {
        JobsFactory.alertMessage("Jobs successfuly deleted!");
        $window.location.href = "#!/Jobs";
      } else {
        vm.messageErrorAlert = "Oupss! An error has occured. Try again";
        console.log(data);
      }
    });
  };
}
