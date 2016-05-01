var todolistControllers = angular.module('todolistControllers', []);

todolistControllers.controller('TodoListCtrl', ['$scope', function ($scope){

  $scope.todos = [];

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

}]);

todolistControllers.controller('IndexController', ['$scope', function($scope){

  $scope.mensagem = 'ola';

}]);
