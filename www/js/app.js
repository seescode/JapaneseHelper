// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('japaneseHelperApp', [    
    'LocalForageModule',
    'ionic'
])
.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('kanji-list', {
          url: '/kanji-list',
          templateUrl: 'templates/kanji-list/kanji-list.html'
      })
      .state('kanji-set', { 
          url: '/kanji-set/:level',
          controller: 'KanjiSetCtrl as vm',
          templateUrl: 'templates/kanji-list/kanji-set.html'
      })
      .state('guess-kanji-level-select', {
          url: '/guess-kanji-level-select',
          controller: 'GuessKanjiLevelSelectCtrl as vm',
          templateUrl: 'templates/guess-kanji/guess-kanji-level-select.html',
          resolve: {
              config: function () {
                  return {
                      currentLevelKey: 'currentKanjiLevel',
                      guessKanjiUrl: '/guess-kanji',
                      title: 'Guess Kanji Level Select'
                  };
              }
          }

      })
      .state('guess-kanji', {
          url: '/guess-kanji/:level',
          controller: 'GuessKanjiCtrl as vm',
          templateUrl: 'templates/guess-kanji/guess-kanji.html',
          resolve:{
              config: function () {
                  return {
                      currentLevelKey: 'currentKanjiLevel',
                      guessKanjiLevelSelectUrl: '/guess-kanji-level-select'
                  };
              }
          }
      })
      .state('guess-kanji-keyword-level-select', {
          url: '/guess-kanji-keyword-level-select',
          controller: 'GuessKanjiLevelSelectCtrl as vm',
          templateUrl: 'templates/guess-kanji/guess-kanji-level-select.html',
          resolve: {
              config: function () {
                  return {
                      currentLevelKey: 'currentKanjiKeywordLevel',
                      guessKanjiUrl: '/guess-kanji-keyword',
                      title: 'Guess Kanji Keyword Level Select'
                  };
              }
          }

      })
      .state('guess-kanji-keyword', {
          url: '/guess-kanji-keyword/:level',
          controller: 'GuessKanjiCtrl as vm',
          templateUrl: 'templates/guess-kanji/guess-kanji-keyword.html',
          resolve: {
              config: function () {
                  return {
                      //TODO: move these strings into the constants-service
                      currentLevelKey: 'currentKanjiKeywordLevel',
                      guessKanjiLevelSelectUrl: '/guess-kanji-keyword-level-select'
                  };
              }
          }
      })
      .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html'
      });

    $urlRouterProvider.otherwise('/home');
})
.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})