angular.module("jobsApp").factory("JobsFactory", JobsFactory);

function JobsFactory($http) {
  let messageAlert = "";

  function getAllJobs() {
    return $http.get("/api/jobs?count=10").then(complete).catch(failed);
  }
  function addNewJob(payload) {
    return $http.post(`/api/jobs`, payload).then(complete).catch(failed);
  }
  function getOneJob(JobsId) {
    return $http.get(`/api/jobs/${JobsId}`).then(complete).catch(failed);
  }
  function deleteJob(JobsId) {
    return $http.delete(`/api/jobs/${JobsId}`).then(complete).catch(failed);
  }
  function complete(response) {
    return response.data;
  }
  function failed(error) {
    return error;
  }

  function alertMessage(message) {
    messageAlert = message;
  }

  function getMessage() {
    return messageAlert;
  }

  function resetAlert() {
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
      messageAlert = "";
    }, 2000);
  }

  return {
    getAllJobs,
    getOneJob,
    addNewJob,
    deleteJob,
    alertMessage,
    getMessage,
    resetAlert,
  };
}
