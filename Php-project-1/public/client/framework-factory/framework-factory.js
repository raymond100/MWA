angular.module('frameworksApp').factory('FrameworksFactory', frameworksFactory);

function frameworksFactory($http) {
  function getAllFrameworks() {
    return $http.get('/api/frameworks').then(complete).catch(failed);
  }
  function getOneFramework(frameworkId) {
    return $http.get(`/api/frameworks/${frameworkId}`).then(complete).catch(failed);
  }

  function complete(response) {
    return response.data;
  }
  function failed(error) {
    return error.statusText;
  }

  return {
    getAllFrameworks,
    getOneFramework,
  };
}
