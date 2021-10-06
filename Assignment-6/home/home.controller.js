angular.module("myTemplateApp").controller("HomeController", HomeController);

function HomeController($scope, $routeParams, DictionaryFactory) {
  const vm = this;
  const word = $routeParams.word;

  $scope.searchWord = "";

  $scope.change = function () {
    vm.definitions = searchWord(DictionaryFactory, $scope.searchWord);
  };

  if (word != undefined) {
    vm.definitions = searchWord(DictionaryFactory, word);
  }
}

function searchWord(factory, word) {
  let allDefinitions = [];
  factory.getDefinition(word).then((response) => {
    const meanings = response[0].meanings;
    const meaningsDefinitions = meanings.map(
      (definitions) => definitions.definitions
    );

    meaningsDefinitions.forEach((definitions) => {
      definitions.forEach((definition) => {
        allDefinitions.push(definition);
      });
    });
  });
  return allDefinitions;
}
