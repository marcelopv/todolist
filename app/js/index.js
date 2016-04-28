var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
var angular = require('angular');
require('angular-route');

var todolistApp = angular.module('todolistApp', ['todolistControllers', 'ngRoute']);

todolistApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        template: require('raw!../partials/test.html'),
        controller: 'IndexController'
      }).
      when('/todolist', {
        template: require('raw!../partials/todolist.html'),
        controllerAs: 'TodoListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

require('./controllers/todolist-ctrl.js');
