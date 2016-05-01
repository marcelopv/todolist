var angular = require('angular');
require('angular-mocks');
require('./../../../../app/js/controllers/todolist-ctrl.js');

describe('TodolistCtrl', function(){

  beforeEach(angular.mock.module('todolistControllers'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('when initialize', function(){
    it('should have two todo items', function(){
      var $scope = {};
      var controller = $controller('TodoListCtrl', { $scope: $scope });

      expect($scope.todos.length).toBe(2);
    });
  });

  describe('when add a todo item', function(){
    it('should increment the list', function(){
      var $scope = {todoText: 'learn mongodb', done: false};
      var controller = $controller('TodoListCtrl', { $scope: $scope });

      $scope.addTodo();

      expect($scope.todos.length).toBe(3);
    });
  });
});
