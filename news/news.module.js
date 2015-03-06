(function () {
  "use strict";

  angular.module('newsRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/news/add', {
        templateUrl: 'news/views/addArticle.html',
        controller: 'NewsController as newsCtrl'
      })
  });

})();