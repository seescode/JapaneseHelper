'use strict';

angular
  .module('japaneseHelperApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/kanji-list', {
            templateUrl: 'views/kanji-list.html'
        })
        .when('/guess-kanji-level-select', {
            templateUrl: 'views/guess-kanji-level-select.html',
            controller: 'GuessKanjiCtrl'
        })
        .when('/guess-kanji/:level', {
            templateUrl: 'views/guess-kanji.html',
            controller: 'GuessKanjiCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
