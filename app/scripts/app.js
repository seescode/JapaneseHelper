'use strict';

angular
  .module('japaneseHelperApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
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
      .otherwise({
        redirectTo: '/'
      });
  });
