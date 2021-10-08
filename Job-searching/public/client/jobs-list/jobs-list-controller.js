angular.module("jobsApp").controller("JobsController", JobsController);

function JobsController(JobsFactory) {
  const vm = this;
  const message = JobsFactory.getMessage();
  // TODO: Get count in the DB.
  const jobFiltered = 100;
  // TODO: Generate number page auto
  const perPage = 10;
  vm.currentPage = 0;

  let offset = perPage * vm.currentPage;

  callJobs(JobsFactory, vm, offset, perPage);

  vm.setCurrentPage = function (val) {
    vm.currentPage = val;
    offset = perPage * vm.currentPage;
    callJobs(JobsFactory, vm, offset, perPage);
  };

  vm.nextPage = function (val) {
    if (offset < jobFiltered) {
      vm.currentPage = parseInt(val) + 1;
      offset = perPage * vm.currentPage;
      console.log(offset);
      callJobs(JobsFactory, vm, offset, perPage);
    }
  };

  vm.previousPage = function (val) {
    if (vm.currentPage > 0) {
      vm.currentPage = parseInt(val) - 1;
      offset = perPage * vm.currentPage;
      callJobs(JobsFactory, vm, offset, perPage);
    }
  };

  if (message != "") {
    vm.successMessage = message;
    JobsFactory.resetAlert();
  }
}

const callJobs = function (factory, ctx, offset, perPage) {
  factory.getAllJobs(offset, perPage).then((response) => {
    ctx.allJobs = response;
  });
};
