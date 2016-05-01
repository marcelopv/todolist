var angular = require('angular');
require('angular-mocks');
require('./../../../../app/js/controllers/todolist-ctrl.js');

describe('todolistCtrl', function(){

  beforeEach(angular.mock.module('todolistControllers'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should have two todos when initialize', function(){
    var $scope = {};
    var controller = $controller('TodoListCtrl', { $scope: $scope });

    expect($scope.todos.length).toBe(2);
  });
});
