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
