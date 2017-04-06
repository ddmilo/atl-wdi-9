const angular = require('angular');
require('angular-ui-router');

angular.module('criminals', ['ui.router'])
       .config(uiRouterSetup);

//UI Router boilerplate
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
      // template: '<h1>Home</h1>'
    })
    .state('about', {
      url: '/about',
      template: "<about></about>"
      // template: '<h1>About</h1>'
    })
    .state('criminals', {
      url: '/criminals',
      template: '<criminals></criminals>'
    })
    .state('newCriminal', {
      url: '/criminals/new',
      template: '<new-criminal></new-criminal>'
    })
    .state('criminalsShow', {
      url: '/criminals/:criminalId',
      template: '<criminals-show></criminals-show>'
    });




    $urlRouterProvider.otherwise('/');
}
