angular.module('todolistApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        template: require('raw!../partials/home.html'),
        controller: 'HomeController'
      }).
      when('/todolist', {
        template: require('raw!../partials/todolist.html'),
        controllerAs: 'TodoListController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
