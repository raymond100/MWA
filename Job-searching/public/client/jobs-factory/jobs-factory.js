angular.module("jobsApp").factory("JobsFactory", JobsFactory);

function JobsFactory($http) {
  let messageAlert = "";

  function getAllJobs(offset, count) {
    return $http
      .get(`/api/jobs?offset=${offset}&count=${count}`)
      .then(complete)
      .catch(failed);
  }
  function addNewJob(payload) {
    return $http.post(`/api/jobs`, payload).then(complete).catch(failed);
  }
  function getOneJob(JobsId) {
    return $http.get(`/api/jobs/${JobsId}`).then(complete).catch(failed);
  }

  function updateJob(jobId, payload) {
    return $http
      .put(`/api/jobs/${jobId}`, payload)
      .then(complete)
      .catch(failed);
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
    updateJob,
    deleteJob,
    alertMessage,
    getMessage,
    resetAlert,
  };
}
