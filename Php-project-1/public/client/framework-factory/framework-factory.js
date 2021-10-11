angular.module('frameworksApp').factory('FrameworksFactory', frameworksFactory);

function frameworksFactory($http) {
  let messageAlert = '';
  function getAllFrameworks() {
    return $http.get('/api/frameworks').then(complete).catch(failed);
  }
  function getOneFramework(frameworkId) {
    return $http.get(`/api/frameworks/${frameworkId}`).then(complete).catch(failed);
  }

  function addNewApp(payload) {
    return $http.post('/api/frameworks', payload).then(complete).catch(failed);
  }

  function deleteApp(frameworkId) {
    return $http.delete(`/api/frameworks/${frameworkId}`).then(complete).catch(failed);
  }

  function complete(response) {
    return response.data;
  }
  function failed(error) {
    return error.statusText;
  }

  function alertMessage(message) {
    messageAlert = message;
  }

  function getMessage() {
    return messageAlert;
  }

  function resetAlert() {
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
      messageAlert = '';
    }, 2000);
  }

  return {
    getAllFrameworks,
    getOneFramework,
    addNewApp,
    deleteApp,
    alertMessage,
    getMessage,
    resetAlert,
  };
}
