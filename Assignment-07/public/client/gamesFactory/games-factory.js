angular.module("meansGameApp").factory("GamesFactory", gamesFactory);

function gamesFactory($http) {
  let messageAlert = "";

  function getAllGames(offset, count, search = "") {
    return $http
      .get(`/api/games?count=${count}&offset=${offset}&search=${search}`)
      .then(complete)
      .catch(failed);
  }
  function addNewGame(payload) {
    return $http.post(`/api/games`, payload).then(complete).catch(failed);
  }
  function getOneGame(gameId) {
    return $http.get(`/api/games/${gameId}`).then(complete).catch(failed);
  }
  function updateGame(gameId, payload) {
    console.log(payload);
    return $http
      .put(`/api/games/${gameId}`, payload)
      .then(complete)
      .catch(failed);
  }
  function deleteGame(gameId) {
    return $http.delete(`/api/games/${gameId}`).then(complete).catch(failed);
  }
  function userRegister(payload) {
    return $http
      .post(`/api/auth/register`, payload)
      .then(complete)
      .catch(failed);
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
    addNewGame,
    updateGame,
    deleteGame,
    userRegister,
    alertMessage,
    getMessage,
    resetAlert,
  };
}
