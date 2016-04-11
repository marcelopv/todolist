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
        template: require('raw!./test.html'),
        controller: 'IndexController'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

require('./controllers.js');
