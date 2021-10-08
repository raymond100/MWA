angular.module("meansGameApp").factory("GamesFactory", gamesFactory);

function gamesFactory($http) {
  let messageAlert = "";

  function getAllGames() {
    return $http.get("/api/games?count=10").then(complete).catch(failed);
  }
  function getOneGame(gameId) {
    return $http.get(`/api/games/${gameId}`).then(complete).catch(failed);
  }
  function deleteGame(gameId) {
    return $http.delete(`/api/games/${gameId}`).then(complete).catch(failed);
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
    getAllGames,
    getOneGame,
    deleteGame,
    alertMessage,
    getMessage,
    resetAlert,
  };
}
