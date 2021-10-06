angular.module("myTemplateApp").factory("DictionaryFactory", DictionaryFactory);

function DictionaryFactory($http) {
  const uri = "https://api.dictionaryapi.dev/api/v2/entries/en";

  function getDefinition(word) {
    return $http.get(`${uri}/${word}`).then(complete).catch(failed);
  }
  function complete(response) {
    return response.data;
  }
  function failed(error) {
    return error.statusText;
  }
  return {
    getDefinition,
  };
}
