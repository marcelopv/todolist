var todolistControllers = angular.module('todolistControllers', []);

todolistControllers.controller('TodoListCtrl', ['$scope', function ($scope){

  $scope.todos = [
      {text:'learn angular', done:false},
      {text:'learn webpack', done:false}
  ];

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

}]);

todolistControllers.controller('IndexController', ['$scope', function($scope){

  $scope.mensagem = 'ola';

}]);
