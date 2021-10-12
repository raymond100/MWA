angular.module('frameworksApp').controller('FrameworkUpdateController', FrameworkUpdateController);

function FrameworkUpdateController(FrameworksFactory, $routeParams, $window) {
  const vm = this;

  const appId = $routeParams.frameworkId;
  FrameworksFactory.getOneFramework(appId).then((data) => {
    let authorString = '';
    let developperString = '';
    let osString = '';
    let languageString = '';

    data.authors.forEach((author, idx, array) => {
      console.log(idx);
      if (idx < array.length - 1) {
        authorString += `${author.firstname} ${author.lastname};`;
      } else {
        authorString += `${author.firstname} ${author.lastname}`;
      }
    });

    data.developpers.forEach((dev, idx, array) => {
      if (idx < array.length - 1) {
        developperString += `${dev.company};`;
      } else {
        developperString += `${dev.company}`;
      }
    });

    data.Os.forEach((el, idx, array) => {
      if (idx < array.length - 1) {
        osString += `${el.name};`;
      } else {
        osString += `${el.name}`;
      }
    });

    data.languages.forEach((lang, idx, array) => {
      if (idx < array.length - 1) {
        languageString += `${lang.name};`;
      } else {
        languageString += `${lang.name}`;
      }
    });

    vm.app = {
      app_name: data.app_name,
      app_description: data.app_description,
      authors: authorString,
      developpers: developperString,
      initial_release: new Date(data.initial_release),
      stable_release: new Date(data.stable_release),
      version: data.version,
      repository: data.repository,
      languages: languageString,
      Os: osString,
      type: data.type,
      licence: data.licence,
      website: data.website,
    };
  });

  vm.updateApp = function () {
    const authorArray = vm.app.authors.split(';');
    const devArray = vm.app.developpers.split(';');
    const langArray = vm.app.languages.split(';');
    const osArray = vm.app.Os.split(';');
    const authors = [];
    const developpers = [];
    const languages = [];
    const Os = [];

    if (vm.formApp.$dirty && vm.formApp.$valid) {
      authorArray.forEach((el) => {
        const authorName = el.split(' ');
        authors.push({ firstname: authorName[0], lastname: authorName[1] });
      });

      devArray.forEach((dev) => {
        developpers.push({ company: dev });
      });

      langArray.forEach((lang) => {
        languages.push({ name: lang });
      });

      osArray.forEach((el) => {
        Os.push({ name: el });
      });

      vm.app.authors = authors;
      vm.app.developpers = developpers;
      vm.app.languages = languages;
      vm.app.Os = Os;

      FrameworksFactory.updateApp(appId, vm.app).then((data) => {
        if (!data.status) {
          FrameworksFactory.alertMessage('Frameworks successfuly updated!');
          $window.location.href = '#!/frameworks';
        } else {
          vm.messageErrorAlert = data.data.message;
        }
      });
    } else {
      alert('There were no changes made.');
    }
  };
}
